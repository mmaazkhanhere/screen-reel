/*This code sets up and exports a Prisma client instance, with focus on reusing
the client globally, especially the product environment to enhance database
connection efficiency */

import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;