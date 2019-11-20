const routes = require('express').Router()

routes.use('/user', require('./user'))
routes.use('/questions', require('./questions'))

module.exports = routes
