const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const dirPath = path.join(__dirname, '..', '..', 'uploads');
const LENGTH = 16;

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, dirPath);
  },
  filename: (req, file, callback) => {
    crypto.randomBytes(LENGTH, (err, hash) => {
      if (err) cb(err);

      file.key = `${hash.toString('hex')}-${file.originalname}`;

      callback(null, file.key);
    });
  }
});

const s3 = multerS3({
  s3: new aws.S3(),
  bucket: process.env.BUCKET_NAME,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
  key: (req, file, cb) => {
    crypto.randomBytes(LENGTH, (err, hash) => {
      if (err) cb(err);

      const fileName = `${hash.toString('hex')}-${file.originalname}`;
      console.log('aqui');

      cb(null, fileName);
    });
  }
});

const upload = multer({ s3 });

module.exports = upload;
