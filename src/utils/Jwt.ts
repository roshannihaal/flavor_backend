import jwt from 'jsonwebtoken'
import { config } from '../config'
import { randomUUID } from 'crypto'

const jwtExpireTime = config.JWT_EXPIRE_TIME
const jwtSecret = config.JWT_SECRET

export const generateJwt = (userId: string, roleId: string) => {
  const sessionId = randomUUID().toString()
  const token = jwt.sign(
    {
      userId,
      sessionId,
      roleId,
    },
    jwtSecret,
    {
      expiresIn: jwtExpireTime,
    },
  )
  const response = {
    sessionId,
    token,
  }
  return response
}
