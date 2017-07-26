const db = require('../models')

const hospitalController = {}

hospitalController.post = (req, res) => {
  const {
    name,
    img,
    position,
    categories,
    description,
    insurance,
    phone,
    email,
    userId
  } = req.body

  const hospital = new db.Hospital({
    name,
    img,
    position,
    categories,
    description,
    insurance,
    phone,
    email,
    _creator: userId
  })

  hospital.save().then(newHospital => {
    return res.status(200).json({
      success: true,
      data: newHospital
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

hospitalController.put = (req, res) => {
  const {
    name,
    img,
    position,
    categories,
    description,
    insurance,
    phone,
    address,
    email,
    userId
  } = req.body

  db.Hospital.findById(id, function (err, hospital) {
    if (err) {
      console.log(err)
    }
    if (!hospital) {
      return new Error('Coud not find document')
    } else {
      hospital.name = name
      hospital.img = img
      hospital.description = description
      hospital.insurance = insurance
      hospital.categories = categories
      hospital.email = email
      hospital.specialty = specialty
      hospital.phone = phone
      hospital.address = address
      hospital.position = position

      hospital.save(function (err) {
        if (err) {
          console.log('error in updating collection')
        } else {
          console.log('success in updating')
        }
      })
    }
  })
}

hospitalController.getAll = (req, res) => {
  db.Hospital.find({}).populate({
    path: '_creator',
    select: 'username createdAt -_id'
  }).then((hospital) => {
    return res.status(200).json({
      succes: true,
      data: hospital
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

module.exports = hospitalController
