import { PrismaClient } from "@prisma/client";
import serviceSeeder from "./serviceSeeder";
import featuredOfferSeeder from "./featuredOfferSeeder";
import locationSeeder from "./locationSeeder";
import portfolioProjectSeeder from "./portfolioProjectSeeder";
import reservationSeeder from "./reservationSeeder";

const prisma = new PrismaClient();

async function truncate() {
    await prisma.contactMessage.deleteMany();
    await prisma.featuredOffer.deleteMany();
    await prisma.jobApplication.deleteMany();
    await prisma.location.deleteMany();
    await prisma.portfolioProject.deleteMany();
    await prisma.portfolioProjectImage.deleteMany();
    await prisma.reservation.deleteMany();
    await prisma.service.deleteMany();
}

async function main() {
    await truncate();
    await serviceSeeder();
    await featuredOfferSeeder();
    await locationSeeder(50);
    await portfolioProjectSeeder(50);
    await reservationSeeder(50);
}


main();