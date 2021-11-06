import { PrismaClient } from "@prisma/client";

const prisma = (global as unknown as { prisma: PrismaClient }).prisma ?? new PrismaClient();

if (process.env.NODE_ENV === "development") {
  (global as unknown as { prisma: PrismaClient }).prisma = prisma;
}

export default prisma;
