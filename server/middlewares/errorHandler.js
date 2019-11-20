module.exports = (err, req, res, next) => {
  console.log(err.name)

  let status, message
  switch (err.name) {
    case 'ValidationError':
      status = 422
      message = []
      for (const path of Object.keys(err.errors)) {
        message.push(err.errors[path].message)
      }
      break
    case 'JsonWebTokenError':
      status = 401
      message = 'access_token required'
      break

    default:
      status = err.status || 500
      message = err.message || 'Internal server error'
  }

  res.status(status).json(message)
}
