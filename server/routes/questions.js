const questions = require('express').Router()
const { QuestionController, AnswerController } = require('../controllers')
const { authenticate } = require('../middlewares/auth')

questions.use(authenticate)
questions.post('/', QuestionController.postQuestion)

questions.post('/:id/answers', AnswerController.postAnswer)

module.exports = questions
