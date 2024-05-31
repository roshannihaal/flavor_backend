import { PrismaClient, PaymentStatus, RoleName } from '@prisma/client'

const prisma = new PrismaClient()

export { prisma, PaymentStatus, RoleName }
