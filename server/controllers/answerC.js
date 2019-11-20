const { Answer } = require('../models')

class AnswerController {
  static postAnswer(req, res, next) {
    Answer.create({
      questionId: req.params.id,
      author: req.payload.id,
      answer: req.body.answer
    })
      .then(answer => {
        res.status(201).json({
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
}

module.exports = AnswerController
