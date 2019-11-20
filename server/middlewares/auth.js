const { User, Question } = require('../models')
const { decode } = require('../helpers/tokenHandler')

module.exports = {
  authenticate(req, res, next) {
    try {
      const payload = decode(req.headers.access_token)
      req.payload = payload
      next()
    } catch (err) {
      next(err)
    }
  },
  authorize(req, res, next) {
    Question.findById(req.params.id)
      .then(question => {
        if (question.author == req.payload.id) next()
        else throw { status: 403, message: 'Unauthorized' }
      })
      .catch(next)
  }
}
