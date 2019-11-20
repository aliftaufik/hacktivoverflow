const { User } = require('../models')
const { compare } = require('../helpers/passwordHandler')
const { encode } = require('../helpers/tokenHandler')

class UserController {
  static signUp(req, res, next) {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        res.status(201).json({
          username: user.username,
          email: user.email,
          password: req.body.password
        })
      })
      .catch(next)
  }

  static signIn(req, res, next) {
    User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }]
    })
      .then(user => {
        try {
          if (user && compare(req.body.password, user.password)) {
            const access_token = encode(user)
            res.status(200).json({ access_token })
          } else {
            throw 'err'
          }
        } catch (err) {
          throw { status: 422, message: 'Wrong username/email/password' }
        }
      })
      .catch(next)
  }

  static checkSession(req, res, next) {
    res.status(200).json(req.payload)
  }
}

module.exports = UserController
