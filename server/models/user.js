const mongoose = require('mongoose')

const { Schema } = mongoose
const passportLocalMongoose = require('passport-local-mongoose')

mongoose.Promise = global.Promise

const userSchema = new Schema({
  username: String,
  password: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

//  this is used to handle salting/ hashing the password
userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)

module.exports = User
