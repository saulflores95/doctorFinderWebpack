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

labController.put = (req, res) => {
  const {
    name,
    img,
    position,
    description,
    categories,
    insurance,
    phone,
    tag,
    email
  } = req.body

  let id = req.params.id
  db.Lab.findById(id, function (err, lab) {
    if (err) {
      console.log(err)
    }
    if (!lab) {
      return new Error('Coud not find document')
    } else {
      lab.name = name
      lab.img = img
      lab.description = description
      lab.insurance = insurance
      lab.categories = categories
      lab.email = email
      lab.tag = tag
      lab.phone = phone
      lab.position = position

      lab.save(function (err) {
        if (err) {
          console.log('error in updating collection')
        } else {
          console.log('success in updating')
        }
      })
    }
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
