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
}

module.exports = QuestionController
