import db from '../models'

const userController = {};

userController.post = (req, res) => {
  const {username, password} = req.body
  const user = new db.User({
    username,
    password,
    type
  })
  user.save().then(newUser => {
    res.status(200).json({
      success:true,
      data:newUser
    })
  }).catch((err) => {
    message:err
  })
}

export default userController
