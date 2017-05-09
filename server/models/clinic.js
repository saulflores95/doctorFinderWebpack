const mongoose = require('mongoose')

const {Schema} = mongoose;
mongoose.Promise = global.Promise
const clinicSchema = new Schema({
    name: {type: String, reqired: true},
    img: {type: String, reqired: true},
    specificOne: String,
    specificTwo: String,
    specificThree: String,
    specificFour: String,
    position: {type: Array, default: [0, 0]},
    specificFive: String,
    specificSix: String,
    email: String,
    insurance: {type: Boolean, default:false},
    createdAt: {type: Date, default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},
    isDeleted:{type: Boolean, default: false},
})

const Clinic = mongoose.model('Clinic', clinicSchema)

module.exports = Clinic
