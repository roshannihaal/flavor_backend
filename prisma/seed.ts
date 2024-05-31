import { PrismaClient, RoleName } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const data = [
    {
      id: RoleName.ADMIN,
      name: 'Admin',
    },
    {
      id: RoleName.USER,
      name: 'User',
    },
    {
      id: RoleName.RESTAURANT,
      name: 'Restaurant',
    },
  ]

  await prisma.roles.createMany({
    data,
  })
}

;(async () => {
  try {
    await main()
    await prisma.$disconnect()
  } catch (error: any) {
    await prisma.$disconnect()
    process.exit(1)
  }
})()
