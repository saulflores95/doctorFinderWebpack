const db = require('../models')

const phrmacieController = {}

phrmacieController.post = (req, res) => {
  const {
    name,
    img,
    position,
    categories,
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
