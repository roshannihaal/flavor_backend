import express, { json } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import hpp from 'hpp'
import { httpLogger, connectToRedis, logger } from './utils'
import { apiRouter } from './api'
import { notFound } from './middlewares/NotFound'
import { errorHandler } from './middlewares'

const app = express()

app.use(json())
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(httpLogger)

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' })
})

try {
  connectToRedis()
} catch (error: any) {
  logger.fatal(error.message)
  process.exit(1)
}

app.use('/api', apiRouter)

app.use(errorHandler)

app.use(notFound)

export default app
