const user = require('express').Router()
const { UserController } = require('../controllers')
const { authenticate } = require('../middlewares/auth')

user.post('/signup', UserController.signUp)
user.post('/signin', UserController.signIn)

user.get('/checksession', authenticate, UserController.checkSession)

module.exports = user
