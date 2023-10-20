import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

const contactRoutes: Router = Router();
const prisma = new PrismaClient();

contactRoutes.post('/contact', async (req: Request, res: Response) => {
    const { fullName, company, email, phoneNumber, subject, details } = req.body;
    if (!fullName) return res.status(422).json({ message: 'Imię i nazwisko są wymagane' });
    if (fullName.length > 200) return res.status(422).json({ message: 'Imię i nazwisko mogą mieć maksymalnie 200 znaków' });
    if (company && company.length > 255) return res.status(422).json({ message: 'Nazwa firmy może mieć maksymalnie 255 znaków' });
    if (!email) return res.status(422).json({ message: 'Adres e-mail jest wymagany' });
    if (email.length > 55) return res.status(422).json({ message: 'Adres e-mail może mieć maksymalnie 55 znaków' });
    const emailRegex = new RegExp(/^[\w\.-]+@[\w\.-]+\.\w+$/);
    if (!emailRegex.test(email)) return res.status(422).json({ message: 'Podaj poprawny adres e-mail' });
    if (!phoneNumber) return res.status(422).json({ message: 'Numer telefonu jest wymagany' });
    if (phoneNumber.length > 30) return res.status(422).json({ message: 'Numer telefonu może mieć maksymalnie 30 znaków' });
    if (!subject) return res.status(422).json({ message: 'Temat jest wymagany' });
    if (subject.length > 255) return res.status(422).json({ message: 'Temat może mieć maksymalnie 255 znaków' });
    if (!details) return res.status(422).json({ message: 'Szczegóły są wymagane' });
    if (details.length > 1000) return res.status(422).json({ message: 'Szczegóły mogą mieć maksymalnie 1000 znaków' });
    try {
        await prisma.contactMessage.create({
            data: {
                fullName,
                companyName: company || undefined,
                email,
                phoneNumber,
                subject,
                details
            }
        });
        res.status(201).json({ message: 'Wiadomość została wysłana' });
    } catch (err) {
        res.sendStatus(500);
    }
});

export default contactRoutes;