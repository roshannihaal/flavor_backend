import { logger, prisma } from '../../utils'

export class Auth {
  private readonly className = 'Auth'

  user_id: string | undefined

  constructor(id?: string) {
    if (id) {
      this.user_id = id
    }
  }

  async getAll(filter: any) {
    const logMessage = `${this.className} -> getAll`
    try {
      const users = await prisma.users.findMany({
        where: filter,
      })
      return users
    } catch (error: any) {
      logger.error(error.message, logMessage)
      throw error
    }
  }

  async get(filter: any) {
    const logMessage = `${this.className} -> get`
    try {
      const user = await prisma.users.findUnique({ where: filter })
      return user
    } catch (error: any) {
      logger.error(error.message, logMessage)
      throw error
    }
  }

  async create(data: any) {
    const logMessage = `${this.className} -> create ->`
    try {
      const user = await prisma.users.create({ data })
      return user
    } catch (error: any) {
      logger.error(error.message, logMessage)
      throw error
    }
  }
}
