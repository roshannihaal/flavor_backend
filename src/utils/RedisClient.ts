import { createClient, RedisClientType } from 'redis'
import { config } from '../config'
import { logger } from './Logger'

const redisPort = config.REDIS_PORT
const redisHost = config.HOST
const jwtExpireTime = config.JWT_EXPIRE_TIME

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

export const addNewSession = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    const score = Math.floor(Date.now() / 1000) + jwtExpireTime
    await client.zAdd(key, { score, value })
  } catch (error) {
    throw error
  }
}
