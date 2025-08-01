const multer = require('multer');
const fs = require('fs');

// Create folder if it doesn't exist
const folder = './upload';
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folder); // ✅ Pass the upload folder path
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const originalName = file.originalname.replace(/\s+/g, '-');
    cb(null, uniqueSuffix + '-' + originalName); // e.g. 162547345-name.jpg
  }
});

// Multer middleware
const upload = multer({ storage });

module.exports = upload;
