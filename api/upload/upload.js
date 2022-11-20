const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null,'uploadedImages')
    },
    filename : function (req,file, cb) {
        const number = Math.floor(Math.random() * 32525345668);
        cb(null, 'Image' + number.toString() + '.png');
    }
});
const fileFilter = (req ,file ,cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null,true);
    } else {
        var error = new Error('Wrong Format');
        error.status  = 500;
        cb(error,false);
    }
} 
const upload = multer({storage: storage,fileFilter:fileFilter});
const tesseract = require('node-tesseract-ocr');
function recognize(path) {
    const config = {
        lang: "eng",
        oem: 1,
        psm: 3,
      };
    
      tesseract
      .recognize(path, config)
      .then((text) => {
        console.log("Result:", text)
      })
      .catch((error) => {
        console.log(error.message)
      });
}

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'handling post req to /upload'
    })
});

router.post('/', upload.single('productImage'), (req,res,next) => {
    recognize(req.file.destination+'/'+req.file.filename);
    console.log(req.file);
    res.status(200).json({
        message: 'handling post req to /upload'
    })
});

module.exports = router;