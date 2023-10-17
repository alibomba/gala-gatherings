import { PrismaClient } from '@prisma/client';
import { Request, Response, Router } from 'express';

const serviceRoutes: Router = Router();
const prisma = new PrismaClient();

serviceRoutes.get('/featured-offers', async (req: Request, res: Response) => {
    const offers = await prisma.featuredOffer.findMany({
        select: {
            service: true
        }
    });
    if (offers.length === 0) return res.status(404).json({ message: 'Brak polecanych pakietów' });
    res.json(offers);
});

serviceRoutes.get('/services', async (req: Request, res: Response) => {
    const services = await prisma.service.findMany();
    if (services.length === 0) return res.status(404).json({ message: 'Brak usług' });
    res.json(services);
});

export default serviceRoutes;