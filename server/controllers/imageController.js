const path = require('path')
const fs = require('fs')
const S3FS = require('s3fs')

var s3fsImpl = new S3FS('healthcarebaja', {
  accessKeyId: 'AKIAJFUPRQ24ZGUQFGOA',
  secretAccessKey: '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',
  subregion: 'us-west-2'
})
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
