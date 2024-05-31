import { Router } from 'express'
import { validateRequest } from '../../middlewares'
import { SignupDTO } from './auth.dto'
import * as controller from './auth.controller'

const router = Router()

router.post('/signup', validateRequest({ body: SignupDTO }), controller.signup)

export const authRouter = router
