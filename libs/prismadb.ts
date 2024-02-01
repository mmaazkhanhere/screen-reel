/*This code sets up and exports a Prisma client instance, with focus on reusing
the client globally, especially the product environment to enhance database
connection efficiency */

import { PrismaClient } from '@prisma/client'

const client = global.prismadb || new PrismaClient()

if (process.env.NODE_ENV === 'production') global.prismadb = client

export default client 