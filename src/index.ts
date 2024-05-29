import app from './app'
import { logger } from './utils'
import { config } from './config'

const port = config.PORT
const nodeEnv = config.NODE_ENV

app.listen(port, () => {
  logger.info(`App (${nodeEnv}) listening on ${port}`)
})
