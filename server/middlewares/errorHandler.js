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
    default:
      status = err.status || 500
      message = err.message || 'Internal server error'
  }

  res.status(status).json(message)
}
