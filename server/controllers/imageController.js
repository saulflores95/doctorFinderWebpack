
import path from 'path'
import fs from 'fs'
import S3FS from 's3fs'
var s3fsImpl = new S3FS('healthcarebaja', {
    accessKeyId: 'AKIAILPNHJA5IYG7NWWA',
    secretAccessKey: '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',
    subregion: 'us-west-2'
})
const imageController = {}

imageController.post = (req, res) => {
  var file = req.file
  console.log(req.file)
  var filePath = path.resolve(__dirname, '../../', file.path)
  var fileName = file.originalname;
  var stream = fs.createReadStream(filePath);
  return s3fsImpl.writeFile(fileName, stream).then(function(){
    fs.unlink(file.path, function(err){
      if(err)
        console.log(err)
    })
    res.redirect('/')
  })
}

export default imageController
