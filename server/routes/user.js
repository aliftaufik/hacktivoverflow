const user = require('express').Router()
const {
  UserController,
  QuestionController,
  AnswerController
} = require('../controllers')
const { authenticate } = require('../middlewares/auth')

user.post('/signup', UserController.signUp)
user.post('/signin', UserController.signIn)

user.use(authenticate)
user.get('/checksession', UserController.checkSession)
user.get('/questions', QuestionController.getUserQuestions)
user.get('/answers', AnswerController.getUserAnswers)

module.exports = user
