const questions = require('express').Router()
const { QuestionController } = require('../controllers')
const { authenticate } = require('../middlewares/auth')

questions.use(authenticate)
questions.post('/', QuestionController.postQuestion)

module.exports = questions
