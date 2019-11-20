const questions = require('express').Router()
const { QuestionController } = require('../../controllers')
const { authenticate } = require('../../middlewares/auth')

questions.get('/', QuestionController.getAllQuestions)
questions.post('/', authenticate, QuestionController.postQuestion)
questions.use('/:id', require('./question'))

module.exports = questions
