const { User } = require('../models')
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
  }
  // authorize(req, res, next) {

  // }
}
