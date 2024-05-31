import { prisma, logger, RoleName } from '../src/utils'

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
    logger.fatal(error.message, 'Seeding Error')
    await prisma.$disconnect()
    process.exit(1)
  }
})()
