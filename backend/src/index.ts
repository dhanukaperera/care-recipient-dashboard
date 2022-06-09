import app from './application'
import logging from './config/logging'
import config from './config/config'

const port = process.env.PORT || 8000

const NAMESPACE = 'SERVER'

app.listen(port, () => {
  logging.info(
    NAMESPACE,
    `Server is running ${config.server.hostname}:${config.server.port}`
  )
})
