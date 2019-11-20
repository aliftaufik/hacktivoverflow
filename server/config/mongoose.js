const mongoose = require('mongoose')
const URI = process.env.MONGODB_URI || 'mongodb://localhost/default'

mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log('mongodb connected to', URI))
  .catch(err => console.log('mongodb connection failed\nError:', err))
