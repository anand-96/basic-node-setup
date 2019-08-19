const config = require('config')

const baseConfig = {
  type: config.get('db.type'),
  host: config.get('db.host'),
  port: config.get('db.port'),
  username: config.get('db.username'),
  password: config.get('db.password'),
  database: config.get('db.database'),
  logging: config.get('db.logging'),
  synchronize: false,
  migrationsRun: false
}

module.exports = {
  ...baseConfig,
  'entities': [
    './src/entities/**/*.ts'
  ],
  'migrations': [
    './src/migrations/**/*.ts'
  ],
  'cli': {
    'entitiesDir': 'src/entities',
    'migrationsDir': 'src/migrations'
  }
}

module.exports.baseConfig = baseConfig
