const mongoose = require('mongoose')

const {Schema} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username:String,
  password:String,
  isDeleted:{type: Boolean, default: false},
  createdAt:{type: Date, default: Date.now}
})

userSchema.plugin(passportLocalMongoose) //this is used tp handle salting/ hashing the password

const User = mongoose.model('User', userSchema)

module.exports = User
