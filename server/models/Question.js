const { Schema, model } = require('mongoose')

const questionSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
      required: [true, 'Title required']
    },
    desc: {
      type: String,
      required: [true, 'Description required']
    },
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

const Question = model('Question', questionSchema)

module.exports = Question
