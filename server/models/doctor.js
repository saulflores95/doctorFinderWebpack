const mongoose = require('mongoose')

const {Schema} = mongoose;
mongoose.Promise = global.Promise
const doctorSchema = new Schema({
    name: {type: String, reqired: true},
    img: {type: String, reqired: true},
    description:String,
    curriculum:{type: Array, default: ['Experience not available']},
    specialty:String,
    email: String,
    phone: {type: String, default: '000-000-000'}
    position: {type: Array, default: [0, 0]},
    insurance: {type: Boolean, default:false},
    createdAt: {type: Date, default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},
    isDeleted:{type: Boolean, default: false},

})

const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor
