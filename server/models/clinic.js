const mongoose = require('mongoose')

const {Schema} = mongoose
mongoose.Promise = global.Promise
const clinicSchema = new Schema({
  name: { type: String, reqired: true },
  email: String,
  facebook: {type: String, default: 'https://www.facebook.com/healthcarebaja/'},
  description: String,
  img: { type: String, reqired: true },
  address: String,
  phone: { type: String, default: '000-000-000' },
  categories: { type: Array, default: ['Categories not available'] },
  insurance: { type: Boolean, default: false },
  position: { type: Array, default: [0, 0] },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  isDeleted: { type: Boolean, default: false }
})

const Clinic = mongoose.model('Clinic', clinicSchema)

module.exports = Clinic
