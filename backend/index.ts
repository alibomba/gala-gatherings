import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app: Application = express();

app.use(cors({
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/storage', express.static(path.join(__dirname, 'public')));

const PORT = process.env.SERVER_PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));