const multer = require("multer");

const multerFiltering = (res, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/svg"
  ) {
    cb(null, true);
  } else {
    return cb("upload only images!");
  }
};

const upload = multer({
  fileFilter: multerFiltering,
});

module.exports = upload;
