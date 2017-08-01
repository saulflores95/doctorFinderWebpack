const db = require('../models')

const phrmacieController = {}

phrmacieController.post = (req, res) => {
  const {
    name,
    img,
    position,
    categories,
    description,
    insurance,
    phone,
    tag,
    email,
    userId
  } = req.body

  const pharmacie = new db.Pharmacie({
    name,
    img,
    position,
    description,
    categories,
    insurance,
    phone,
    tag,
    email,
    _creator: userId
  })

  pharmacie.save().then(newPharmacie => {
    return res.status(200).json({
      success: true,
      data: newPharmacie
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

phrmacieController.put = (req, res) => {
  const {
    name,
    img,
    position,
    categories,
    description,
    insurance,
    phone,
    address,
    tag,
    email,
    userId
  } = req.body

  let id = req.params.id
  db.Pharmacie.findById(id, function (err, pharmacie) {
    if (err) {
      console.log(err)
    }
    if (!pharmacie) {
      return new Error('Coud not find document')
    } else {
      pharmacie.name = name
      pharmacie.img = img
      pharmacie.description = description
      pharmacie.insurance = insurance
      pharmacie.categories = categories
      pharmacie.email = email
      pharmacie.tag = tag
      pharmacie.phone = phone
      pharmacie.address = address
      pharmacie.position = position

      pharmacie.save(function (err) {
        if (err) {
          console.log('error in updating collection')
        } else {
          console.log('success in updating')
        }
      })
    }
  })

}


phrmacieController.getAll = (req, res) => {
  db.Pharmacie.find({}).populate({
    path: '_creator',
    select: 'username createdAt -_id'
  }).then((pharmacie) => {
    return res.status(200).json({
      succes: true,
      data: pharmacie
    })
  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  })
}

module.exports = phrmacieController
