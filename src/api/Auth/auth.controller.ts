import { Request, Response, NextFunction } from 'express'
import { CreateUser, SignupDTO } from './auth.dto'
import { Auth } from './auth.service'
import { addNewSession, generateJwt } from '../../utils'

export const signup = async (
  req: Request<unknown, unknown, SignupDTO>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { body } = req

    // Validate password and confirm password
    if (body.password !== body.confirmPassword) {
      res.status(400)
      throw new Error(`Password's do not match`)
    }

    // Check if email already exists
    const filter = {
      email: body.email,
    }
    const auth = new Auth()
    const user = await auth.get(filter)
    if (user) {
      res.status(400)
      throw new Error(`Email Id already exists`)
    }

    // Create new user
    const userData: CreateUser = {
      email: body.email,
      name: body.name,
      password: body.password,
    }
    if (body.roleId) {
      userData.role = {
        connect: {
          id: body.roleId,
        },
      }
    }
    const newUser = await auth.create(userData)

    // Create session
    const { sessionId, token } = generateJwt(newUser.id, newUser.role_id)
    await addNewSession(newUser.id, sessionId)

    // Send response
    const response = {
      message: 'User created',
      data: {
        id: newUser.id,
        token,
      },
    }
    res.status(200).send(response)
  } catch (error) {
    next(error)
  }
}
