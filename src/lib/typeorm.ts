import { createConnection } from 'typeorm'
import logger from './logger'
import config from 'config'
import { User } from '../entities'

import { baseConfig } from '../../ormconfig'

async function initDatabase () {
  await createConnection({
    ...baseConfig,
    entities: [User]
  }).then(function (connection) {
    logger.info(`DB connected\t: ${config.get('db.port')}`)
    return connection
  }).catch(function (error) {
    logger.info(`Connection error:- ${error}`)
  })
}

export default initDatabase
