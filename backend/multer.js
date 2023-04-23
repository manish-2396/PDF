"use strict";
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const filefiter = (req, file, cb) => {
  console.log(file);
  if (file.mimetype === "application/pdf") {
    cd(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFiter: filefiter });

module.exports = {
  upload,
};
