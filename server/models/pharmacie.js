const mongoose = require('mongoose')

const {Schema} = mongoose;
mongoose.Promise = global.Promise
const pharmacieSchema = new Schema({
    name: {type: String, reqired: true},
    img: {type: String, reqired: true},
    latitude: {type:Number, default: 0},
    longitude: {type:Number, default: 0},
    phone:String,
    tag:String,
    createdAt: {type: Date, default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},
    isDeleted:{type: Boolean, default: false},
})

const Pharmacie = mongoose.model('Pharmacie', pharmacieSchema)

module.exports = Pharmacie
