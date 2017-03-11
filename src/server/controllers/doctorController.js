import db from '../models'

const doctorController = {};

doctorController.post = (req, res) => {
  const {
    name,
    img,
    description,
    curriculumOne,
    curriculumTwo,
    curriculumThree,
    curriculumFour,
    curriculumFive,
    curriculumSix,
    latitude,
    longitude,
    insurance,
    specialty,
    email,
    userId,
  } = req.body

  const doctor = new db.Doctor({
    name,
    img,
    description,
    curriculumOne,
    curriculumTwo,
    curriculumThree,
    curriculumFour,
    curriculumFive,
    curriculumSix,
    latitude,
    longitude,
    insurance,
    specialty,
    email,
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

export default doctorController
