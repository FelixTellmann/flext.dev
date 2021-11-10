import { PrismaClient } from "@prisma/client";

export const DB = (global as unknown as { prisma: PrismaClient }).prisma ?? new PrismaClient();

if (process.env.NODE_ENV === "development") {
  (global as unknown as { prisma: PrismaClient }).prisma = DB;
}
