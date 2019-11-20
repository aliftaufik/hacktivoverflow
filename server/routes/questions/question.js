const question = require('express').Router({ mergeParams: true })
const { QuestionController, AnswerController } = require('../../controllers')
const { authenticate, authorize } = require('../../middlewares/auth')

question.get('/', QuestionController.getOneQuestion)
question.put('/', authenticate, authorize, QuestionController.updateQuestion)
question.delete('/', authenticate, authorize, QuestionController.deleteQuestion)
question.patch('/upvote', authenticate, QuestionController.upVoteHandler)
question.patch('/downvote', authenticate, QuestionController.downVoteHandler)
question.get('/answers', AnswerController.getQuestionAnswers)
question.post('/answers', authenticate, AnswerController.postAnswer)

module.exports = question
