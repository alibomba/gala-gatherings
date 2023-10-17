import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

import reservationRoutes from './routes/reservationRoutes';
import serviceRoutes from './routes/serviceRoutes';
import portfolioRoutes from './routes/portfolioRoutes';
import locationRoutes from './routes/locationRoutes';

const app: Application = express();

app.use(cors({
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/storage', express.static(path.join(__dirname, 'public')));
app.use('/api', reservationRoutes);
app.use('/api', serviceRoutes);
app.use('/api', portfolioRoutes);
app.use('/api', locationRoutes);

const PORT = process.env.SERVER_PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));