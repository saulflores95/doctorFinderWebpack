import mongoose from 'mongoose'

const {Schema} = mongoose;
mongoose.Promise = global.Promise
const labSchema = new Schema({
    name: {type: String, reqired: true},
    img: {type: String, reqired: true},
    latitude: {type:Number, default: 0},
    longitude: {type:Number, default: 0},
    phone:String,
    createdAt: {type: Date, default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},
    isDeleted:{type: Boolean, default: true},
})

const Lab = mongoose.model('Lab', labSchema)

export default Lab
