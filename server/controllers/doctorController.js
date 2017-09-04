const db = require('../models')

const doctorController = {}

doctorController.post = (req, res) => {
  const {
    name,
    img,
    description,
    insurance,
    curriculum,
    email,
    facebook,
    specialty,
    phone,
    address,
    position,
    userId
  } = req.body

  const doctor = new db.Doctor({
    name,
    img,
    description,
    insurance,
    curriculum,
    email,
    facebook,
    phone,
    specialty,
    address,
    position,
    _creator: userId
  })

  doctor.save().then(newDoctor => {
    return res.status(200).json({
      success: true,
      data: newDoctor
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

doctorController.put = (req, res) => {
  const {
    name,
    img,
    description,
    insurance,
    curriculum,
    email,
    specialty,
    phone,
    address,
    position
  } = req.body
  let id = req.params.id
  db.Doctor.findById(id, function (err, doctor) {
    if (err) {
      console.log(err)
    }
    if (!doctor) {
      return new Error('Coud not find document')
    } else {
      doctor.name = name
      doctor.img = img
      doctor.description = description
      doctor.insurance = insurance
      doctor.curriculum = curriculum
      doctor.email = email
      doctor.specialty = specialty
      doctor.phone = phone
      doctor.address = address
      doctor.position = position

      doctor.save(function (err) {
        if (err) {
          console.log('error in updating collection')
        } else {
          console.log('success in updating')
        }
      })
    }
  })
}

doctorController.getAll = (req, res) => {
  db.Doctor.find({}).populate({
    path: '_creator',
    select: 'username createdAt -_id'
  }).then((doctor) => {
    return res.status(200).json({
      succes: true,
      data: doctor
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

module.exports = doctorController
