import mongoose from 'mongoose'

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    minLength:[5, 'username must be 5 or more characters']
  },
  password:{
    type:String,
    required:true,
    minLength:[8, 'psw must be 8 or more']
  },
  isDeleted:{type: Boolean, default: true},
  createdAt:{type: Date, default: Date.now}
})

const User = mongoose.model('User', userSchema)

export default User
