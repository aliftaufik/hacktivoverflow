const answers = require('express').Router({ mergeParams: true })
const { AnswerController } = require('../controllers')
const { authenticate, authorize } = require('../middlewares/auth')

answers.get('/', AnswerController.getOneAnswer)
answers.put('/', authenticate, authorize, AnswerController.updateAnswer)
answers.delete('/', authenticate, authorize, AnswerController.deleteAnswer)
answers.patch('/upvote', authenticate, AnswerController.upVoteHandler)
answers.patch('/downvote', authenticate, AnswerController.downVoteHandler)

module.exports = answers
