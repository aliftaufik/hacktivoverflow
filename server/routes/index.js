const routes = require('express').Router()

routes.use('/user', require('./user'))
routes.use('/questions', require('./questions'))
routes.use('/answers/:id', require('./answers'))

module.exports = routes
