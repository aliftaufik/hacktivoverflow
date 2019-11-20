const answers = require('express').Router()
const { AnswerController } = require('../controllers')
const { authenticate, authorize } = require('../middlewares/auth')

answers.get('/:id', AnswerController.getOneAnswer)
answers.put('/:id', authenticate, authorize, AnswerController.updateAnswer)
answers.delete('/:id', authenticate, authorize, AnswerController.deleteAnswer)

module.exports = answers
