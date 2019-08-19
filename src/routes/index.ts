import { initUserRouter } from './users'

const initRoutes = (app) => {
  app.use('/', initUserRouter())

  app.get('/error', (req, res) => {
    res.render('error')
  })
}

export default initRoutes
