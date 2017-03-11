import db from '../models'

const hospitalController = {};

hospitalController.post = (req, res) => {
  const {
    name,
    img,
    latitude,
    longitude,
    phone,
    email,
    userId,
  } = req.body

  const hospital = new db.Hospital({
    name,
    email,
    img,
    latitude,
    longitude,
    phone,
    _creator: userId
  })

  hospital.save().then(newHospital => {
    return res.status(200).json({
      success:true,
      data:newHospital
    })
  }).catch((err) => {
    return res.status(500).json({
      message:err
    })
  })
}

hospitalController.getAll = (req, res) => {
  db.Hospital.find({}).populate({
    path:'_creator',
    select:'username createdAt -_id'
  }).then((hospital) => {
    return res.status(200).json({
      succes:true,
      data:hospital
    });
  }).catch((err) => {
    return res.status(500).json({
      message:err
    });
  });
};

export default hospitalController
