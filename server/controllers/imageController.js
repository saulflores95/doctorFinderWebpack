const path = require('path')
const fs = require('fs')
const S3FS = require('s3fs')

var s3fsImpl = new S3FS('healthcarebaja', {
  accessKeyId: process.env.AKI,
  secretAccessKey: process.env.SAK,
  subregion: 'us-west-2'
})

console.log('AKI', process.env.AKI)
console.log('SAK', process.env.SAK)

const imageController = {}

imageController.post = (req, res) => {
  var file = req.file
  var filePath = path.resolve(__dirname, '../../', file.path)
  var fileName = file.originalname
  var stream = fs.createReadStream(filePath)
  return s3fsImpl.writeFile(fileName, stream).then(function () {
    fs.unlink(file.path, function (err) {
      if (err) {
        console.log(err)
      }
    })
    res.redirect('/')
  })
}

module.exports = imageController
