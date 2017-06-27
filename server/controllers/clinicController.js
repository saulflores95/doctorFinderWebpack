const db = require('../models')

const clinicController = {}

clinicController.post = (req, res) => {
  const {
    name,
    email,
    description,
    img,
    categories,
    insurance,
    position,
    userId
  } = req.body

  const clinic = new db.Clinic({
    name,
    email,
    description,
    img,
    categories,
    insurance,
    position,
    _creator: userId
  })

  clinic.save().then(newClinic => {
    return res.status(200).json({
      success: true,
      data: newClinic
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

clinicController.getAll = (req, res) => {
  db.Clinic.find({}).populate({
    path: '_creator',
    select: 'username createdAt -_id'
  }).then((clinic) => {
    return res.status(200).json({
      succes: true,
      data: clinic
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

module.exports = clinicController
