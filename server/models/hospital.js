const mongoose = require('mongoose')

const {Schema} = mongoose;
mongoose.Promise = global.Promise
const hospitalSchema = new Schema({
    name: {type: String, reqired: true},
    img: {type: String, reqired: true},
    position: {type: Array, default: [0, 0]},
    phone:String,
    createdAt: {type: Date, default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},
    isDeleted:{type: Boolean, default: false},
})

const Hospital = mongoose.model('Hospital', hospitalSchema)

module.exports = Hospital
