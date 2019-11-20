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

  static getOneAnswer(req, res, next) {
    Answer.findById(req.params.id)
      .then(answer => {
        if (answer) {
          res.status(200).json(answer)
        } else throw { status: 404, message: 'Answer not found' }
      })
      .catch(next)
  }

  static updateAnswer(req, res, next) {
    Answer.findByIdAndUpdate(
      req.params.id,
      {
        answer: req.body.answer
      },
      {
        new: true,
        omitUndefined: true
      }
    )
      .then(answer => {
        res.status(200).json(answer)
      })
      .catch(next)
  }

  static deleteAnswer(req, res, next) {
    Answer.findByIdAndRemove(req.params.id, { select: '_id title' })
      .then(question => {
        res.status(200).json({
          id: question._id,
          status: 'deleted'
        })
      })
      .catch(next)
  }
}

module.exports = AnswerController
