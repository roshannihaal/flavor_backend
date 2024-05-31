import { Request, Response, NextFunction } from 'express'
import { SignupDTO } from './auth.dto'
import { Auth } from './auth.service'

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
    const userData = {
      email: body.email,
      name: body.name,
      password: body.password,
      role: {
        connect: {
          id: body.roleId,
        },
      },
    }
    const newUser = await auth.create(userData)

    // Send response
    const response = {
      message: 'User created',
      data: {
        id: newUser.id,
      },
    }
    res.status(200).send(response)
  } catch (error) {
    next(error)
  }
}
