const mongoose = require('mongoose')

const {Schema} = mongoose
mongoose.Promise = global.Promise
const clinicSchema = new Schema({
  name: { type: String, reqired: true },
  email: String,
  description: String,
  img: { type: String, reqired: true },
  categories: { type: Array, default: ['Categories not available'] },
  insurance: { type: Boolean, default: false },
  position: { type: Array, default: [0, 0] },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  isDeleted: { type: Boolean, default: false }
})

const Clinic = mongoose.model('Clinic', clinicSchema)

module.exports = Clinic
