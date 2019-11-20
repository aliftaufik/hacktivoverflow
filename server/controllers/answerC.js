const { Answer, Question } = require('../models')

class AnswerController {
  static postAnswer(req, res, next) {
    Question.findById(req.params.id)
      .then(question => {
        if (question) {
          return Answer.create({
            questionId: req.params.id,
            author: req.payload.id,
            answer: req.body.answer
          })
        } else throw { status: 404, message: 'Question not found' }
      })
      .then(answer => {
        res.status(201).json({
          id: answer._id,
          questionId: answer.questionId,
          author: answer.author,
          answer: answer.answer,
          createdAt: answer.createdAt
        })
      })
      .catch(next)
  }

  static getUserAnswers(req, res, next) {
    Answer.find({ author: req.payload.id })
      .then(answers => {
        res.status(200).json(answers)
      })
      .catch(next)
  }

  static getQuestionAnswers(req, res, next) {
    Question.findById(req.params.id)
      .then(question => {
        if (question) {
          return Answer.find({ questionId: req.params.id })
        } else throw { status: 404, message: 'Question not found' }
      })
      .then(answers => {
        res.status(200).json(answers)
      })
      .catch(next)
  }

  
}

module.exports = AnswerController
