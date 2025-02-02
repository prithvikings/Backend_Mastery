const multer = require('multer');
const storage = multer.memoryStorage(); // Storing files in memory
const upload = multer({ storage: storage });

module.exports = upload;
