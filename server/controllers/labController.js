const db = require('../models')

const labController = {}

labController.post = (req, res) => {
  const {
    name,
    img,
    position,
    description,
    categories,
    insurance,
    phone,
    tag,
    email,
    userId
  } = req.body

  const lab = new db.Lab({
    name,
    img,
    position,
    categories,
    insurance,
    description,
    phone,
    tag,
    email,
    _creator: userId
  })

  lab.save().then(newLab => {
    return res.status(200).json({
      success: true,
      data: newLab
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

labController.getAll = (req, res) => {
  db.Lab.find({}).populate({
    path: '_creator',
    select: 'username createdAt -_id'
  }).then((lab) => {
    return res.status(200).json({
      succes: true,
      data: lab
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

module.exports = labController
