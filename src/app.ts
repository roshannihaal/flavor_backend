import express, { json } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import hpp from 'hpp'
import { httpLogger } from './utils'
const app = express()

app.use(json())
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(httpLogger)

app.get('/ping', (req, res) => {
  const resStatusCode = 200
  return res.status(resStatusCode).json({ message: 'pong' })
})

export default app
