import { Router } from 'express'
import { authRouter } from './Auth'

const router = Router()

router.use('/auth', authRouter)

export const apiRouter = router
