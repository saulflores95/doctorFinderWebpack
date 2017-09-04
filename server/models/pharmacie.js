const mongoose = require('mongoose')

const { Schema } = mongoose
mongoose.Promise = global.Promise
const pharmacieSchema = new Schema({
  name: { type: String, reqired: true },
  img: { type: String, reqired: true },
  position: { type: Array, default: [0, 0] },
  insurance: { type: Boolean, default: false },
  description: String,
  categories: { type: Array, default: ['Categories not available'] },
  phone: String,
  address: String,
  tag: String,
  createdAt: { type: Date, default: Date.now },
  email: String,
  facebook: {type: String, default: 'https://www.facebook.com/healthcarebaja/'},
  _creator: { type: Schema.ObjectId, ref: 'User' },
  isDeleted: { type: Boolean, default: false }
})

const Pharmacie = mongoose.model('Pharmacie', pharmacieSchema)

module.exports = Pharmacie
