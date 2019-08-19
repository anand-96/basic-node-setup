import * as bodyParser from 'body-parser'
import 'reflect-metadata'
import logger from './lib/logger'
import initRoutes from './routes/index'
import initDatabase from './lib/typeorm'
import config from 'config'
import express from 'express'
import * as path from 'path'
import cors from 'cors'

const app = express()

const startServer = () => {
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.use(express.static(path.join(__dirname, 'assets')))

  initRoutes(app)
  app.listen(config.get('port'), () => {
    logger.info(`Server started on port ${config.get('port')}!`)
  })
}

const initApp = async () => {
  await initDatabase().catch((error) => {
    logger.error(`Error in initialise Database:- ${error}`)
  })
  startServer()
}

initApp().catch((error) => {
  logger.error(`Error in initialise App:- ${error}`)
})

export default app
