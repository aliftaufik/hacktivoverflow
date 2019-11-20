const { Question, Answer } = require('../models')
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
    const Model = req.baseUrl == '/answers' ? Answer : Question
    Model.findById(req.params.id)
      .then(doc => {
        if (!doc) throw { status: 404, message: `${Model.modelName} not found` }
        if (doc.author == req.payload.id) next()
        else throw { status: 403, message: 'Unauthorized' }
      })
      .catch(next)
  }
}
