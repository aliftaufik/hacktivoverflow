const { Schema, model } = require('mongoose')

const answerSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  answer: {
    type: String,
    required: [true, 'Answer required']
  },
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

const Answer = model('Answer', answerSchema)

module.exports = Answer
