import express from 'express'
const routes = express()
import path from 'path'
import fs from 'fs'
import S3FS from 's3fs'
var s3fsImpl = new S3FS('healthcarebaja', {
    accessKeyId: 'AKIAILPNHJA5IYG7NWWA',
    secretAccessKey: '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',
    subregion: 'us-west-2'
})
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

//controller imports
import userController from './controllers/userController'
import doctorController from './controllers/doctorController'
import clinicController from './controllers/clinicController'
import pharmacieController from './controllers/pharmacieController'
import hospitalController from './controllers/hospitalController'
import labController from './controllers/labController'
import imageController from './controllers/imageController'
//router setupz
routes.post('/image-upload', upload.single('file'), function (req, res) {
  var file = req.file
  console.log(req.file)
  var filePath = path.resolve(__dirname, '..', file.path)
  var fileName = file.originalname;
  var stream = fs.createReadStream(filePath);
  return s3fsImpl.writeFile(fileName, stream).then(function(){
    fs.unlink(file.path, function(err){
      if(err)
        console.log(err)
    })
    res.redirect('/')
  })
});
routes.post('/signup', userController.post)
routes.post('/doctor-registration', doctorController.post)
routes.post('/clinic-registration', clinicController.post)
routes.post('/hospital-registration', hospitalController.post)
routes.post('/pharmacie-registration', pharmacieController.post)
routes.post('/lab-registration', labController.post)

routes.get('/doctors', doctorController.getAll)
routes.get('/clinics', clinicController.getAll)
routes.get('/pharmacies', pharmacieController.getAll)
routes.get('/labs', labController.getAll)
routes.get('/hospitals', clinicController.getAll)

export default routes
