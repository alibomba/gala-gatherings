import { Request, Response, Router } from 'express';
import { Location, PrismaClient } from '@prisma/client';
import PaginationResponse from '../types/PaginationResponse';

const locationRoutes: Router = Router();
const prisma = new PrismaClient();

const PER_PAGE = 8;

locationRoutes.get('/locations', async (req: Request, res: Response) => {
    let page = req.query.page as string | number;
    if (page) page = +page;
    else page = 1;
    const locationCount = await prisma.location.count();
    const lastPage = Math.ceil(locationCount / PER_PAGE);
    if (page > lastPage) return res.status(404).json({ message: `Jest tylko ${lastPage} stron` });
    const offset = (page - 1) * PER_PAGE;
    const locations = await prisma.location.findMany({ take: PER_PAGE, skip: offset });
    const response: PaginationResponse<Location> = {
        currentPage: page,
        lastPage,
        data: locations
    };
    res.json(response);
});

export default locationRoutes;