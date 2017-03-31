const mongoose = require('mongoose')

const {Schema} = mongoose;
mongoose.Promise = global.Promise
const doctorSchema = new Schema({
    name: {type: String, reqired: true},
    img: {type: String, reqired: true},
    description:String,
    curriculumOne: String,
    curriculumTwo: String,
    curriculumThree: String,
    curriculumFour: String,
    curriculumFive: String,
    curriculumSix: String,
    specialty:String,
    email: String,
    insurance: {type: Boolean, default:false},
    createdAt: {type: Date, default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},
    isDeleted:{type: Boolean, default: false},

})

const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor
