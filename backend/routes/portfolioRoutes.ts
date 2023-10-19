import { Request, Response, Router } from 'express';
import { PortfolioProject, PrismaClient } from '@prisma/client';
import PaginationResponse from '../types/PaginationResponse';
import Redis from 'ioredis';

const portfolioRoutes: Router = Router();
const prisma = new PrismaClient();
const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT as string),
    password: process.env.REDIS_PASSWORD
});

const PER_PAGE = 8;

portfolioRoutes.get('/portfolio', async (req: Request, res: Response) => {
    let page = req.query.page as string | number;
    if (page) page = +page;
    else page = 1;
    const projectCount = await prisma.portfolioProject.count();
    const lastPage = Math.ceil(projectCount / PER_PAGE);
    if (page > lastPage) return res.status(404).json({ message: `Jest tylko ${lastPage} stron` });
    const offset = (page - 1) * PER_PAGE;
    const projects = await prisma.portfolioProject.findMany({ take: PER_PAGE, skip: offset, include: { images: true }, orderBy: { date: 'desc' } });
    const response: PaginationResponse<PortfolioProject> = {
        currentPage: page,
        lastPage,
        data: projects
    };
    res.json(response);
});

portfolioRoutes.get('/project/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const cachedProject = await redis.get(`project.${id}`, (err, result) => {
        if (err) return res.json(err);
    });
    if (cachedProject) return res.json(JSON.parse(cachedProject));
    const project = await prisma.portfolioProject.findUnique({ where: { id }, include: { images: true } });
    if (!project) return res.status(404).json({ message: 'Projekt nie istnieje' });
    await redis.set(`project.${id}`, JSON.stringify(project));
    await redis.expire(`project.${id}`, 3600);
    res.json(project);
});

export default portfolioRoutes;