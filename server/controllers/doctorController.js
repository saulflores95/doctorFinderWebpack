const db = require('../models')

const doctorController = {};

doctorController.post = (req, res) => {
  const {
    name,
    img,
    description,
    insurance,
    curriculum,
    email,
    specialty,
    phone,
    direccion,
    position,
    userId,
  } = req.body

  const doctor = new db.Doctor({
    name,
    img,
    description,
    insurance,
    curriculum,
    email,
    phone,
    specialty,
    direccion,
    position,
    _creator: userId
  })

  doctor.save().then(newDoctor => {
    return res.status(200).json({
      success:true,
      data:newDoctor
    })
  }).catch((err) => {
    return res.status(500).json({
      message:err
    })
  })
}

doctorController.getAll = (req, res) => {
  db.Doctor.find({}).populate({
    path:'_creator',
    select:'username createdAt -_id'
  }).then((doctor) => {
    return res.status(200).json({
      succes:true,
      data:doctor
    });
  }).catch((err) => {
    return res.status(500).json({
      message:err
    });
  });
};

module.exports = doctorController
