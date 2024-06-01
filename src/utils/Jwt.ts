import jwt from 'jsonwebtoken'
import { config } from '../config'
import { randomUUID } from 'crypto'
import { GenerateJwtResponse } from './utils.dto'

const jwtExpireTime = config.JWT_EXPIRE_TIME
const jwtSecret = config.JWT_SECRET

export const generateJwt = (
  userId: string,
  roleId: string,
): GenerateJwtResponse => {
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
