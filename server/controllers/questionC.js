const { Question } = require('../models')

class QuestionController {
  static postQuestion(req, res, next) {
    Question.create({
      author: req.payload.id,
      title: req.body.title,
      desc: req.body.desc
    })
      .then(question => {
        res.status(201).json({
          id: question._id,
          author: question.author,
          title: question.title,
          desc: question.desc,
          createdAt: question.createdAt
        })
      })
      .catch(next)
  }

  static getUserQuestions(req, res, next) {
    Question.find({ author: req.payload.id })
      .then(questions => {
        res.status(200).json(questions)
      })
      .catch(next)
  }

  static getAllQuestions(req, res, next) {
    Question.find({})
      .then(questions => {
        res.status(200).json(questions)
      })
      .catch(next)
  }

  static getOneQuestion(req, res, next) {
    Question.findById(req.params.id)
      .then(question => {
        if (question) res.status(200).json(question)
        else throw { status: 404, message: 'Question not found' }
      })
      .catch(next)
  }

  static updateQuestion(req, res, next) {
    Question.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title || undefined,
        desc: req.body.desc || undefined
      },
      { new: true, omitUndefined: true }
    )
      .then(question => {
        if (question) res.status(200).json(question)
        else throw { status: 404, message: 'Question not found' }
      })
      .catch(next)
  }

  static deleteQuestion(req, res, next) {
    Question.findByIdAndRemove(req.params.id, { select: '_id title' })
      .then(question => {
        if (question) {
          res.status(200).json({
            id: question._id,
            title: question.title,
            status: 'deleted'
          })
        } else throw { status: 404, message: 'Question not found' }
      })
      .catch(next)
  }
}

module.exports = QuestionController
