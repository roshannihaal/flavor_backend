import { createClient, RedisClientType } from 'redis'
import { config } from '../config'
import { logger } from './Logger'

const redisPort = config.REDIS_PORT
const redisHost = config.HOST

const client: RedisClientType = createClient({
  url: `redis://${redisHost}:${redisPort}`,
})

export const connectToRedis = async (): Promise<void> => {
  try {
    await client.connect()
    logger.info('Connected to redis')
  } catch (error) {
    throw error
  }
}
