const db = require('../models')

const clinicController = {}

clinicController.post = (req, res) => {
  const {
    name,
    email,
    facebook,
    description,
    phone,
    address,
    img,
    categories,
    insurance,
    position,
    userId
  } = req.body

  const clinic = new db.Clinic({
    name,
    email,
    facebook,
    description,
    phone,
    img,
    address,
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

clinicController.put = (req, res) => {
  const {
    name,
    img,
    description,
    insurance,
    categories,
    email,
    specialty,
    phone,
    address,
    facebook,
    position
  } = req.body
  let id = req.params.id
  console.log(categories)
  db.Clinic.findById(id, function (err, clinic) {
    if (err) {
      console.log(err)
    }
    if (!clinic) {
      return new Error('Coud not find document')
    } else {
      clinic.name = name
      clinic.img = img
      clinic.description = description
      clinic.insurance = insurance
      clinic.categories = categories
      clinic.email = email
      clinic.specialty = specialty
      clinic.phone = phone
      clinic.address = address
      clinic.facebook = facebook
      clinic.position = position

      clinic.save(function (err) {
        if (err) {
          console.log('error in updating collection')
        } else {
          console.log('success in updating')
        }
      })
    }
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
