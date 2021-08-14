const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

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

const upload = multer({ storage });

module.exports = upload;
