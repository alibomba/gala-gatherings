import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { add, sub, format } from 'date-fns';
import formatDate from '../utilities/formatDate';

const reservationRoutes: Router = Router();
const prisma = new PrismaClient();

reservationRoutes.get('/nearest-date', async (req: Request, res: Response) => {
    const reservations = await prisma.reservation.findMany({
        where: {
            date: {
                gte: new Date()
            }
        },
        orderBy: {
            date: 'asc'
        },
        select: {
            date: true
        },
        take: 1
    });
    if (reservations.length === 0) {
        const tomorrow = add(new Date(), { days: 1 });
        const tomorrowString = formatDate(tomorrow);
        return res.json({
            date: tomorrowString,
            remaining: 1
        });
    }
    const nearestTakenDate = reservations[0].date;
    const nearestFreeDate = sub(nearestTakenDate, { days: 1 });
    const nearestFreeDateString = formatDate(nearestFreeDate);

    const now = new Date();
    const timeDifference = nearestFreeDate.getTime() - now.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    res.json({
        date: nearestFreeDateString,
        remaining: daysDifference
    });

});

export default reservationRoutes;