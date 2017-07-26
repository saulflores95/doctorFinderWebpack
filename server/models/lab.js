const mongoose = require('mongoose')

const { Schema } = mongoose
mongoose.Promise = global.Promise
const labSchema = new Schema({
  name: { type: String, reqired: true },
  img: { type: String, reqired: true },
  position: { type: Array, default: [0, 0] },
  description: String,
  insurance: { type: Boolean, default: false },
  phone: String,
  categories: { type: Array, default: ['Categories not available'] },
  tag: String,
  address: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  isDeleted: { type: Boolean, default: false }
})

const Lab = mongoose.model('Lab', labSchema)

module.exports = Lab
