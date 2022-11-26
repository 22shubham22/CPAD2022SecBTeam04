const tesseract = require('node-tesseract-ocr');
const Tesseract = require('tesseract.js');

exports.upload_get = (req,res,next) => {
    res.status(200).json({
        message: 'handling post req to /upload'
    })
};

exports.upload_post = (req,res,next) => {
    recognize(req.file.destination+'/'+req.file.filename);
    res.status(200).json({
        message: 'handling post req to /upload'
    })
};

async function recognize(path) {
    const config = {
        lang: "eng",
        oem: 1,
        psm: 3,
  };

  // const worker = await Tesseract.createWorker();
  // await worker.loadLanguage('eng');
  // const { data: { text } } = await worker.recognize(path);
  // console.log(text);
    
      tesseract
      .recognize(path, config)
      .then((text) => {
        console.log("Result:", text)
      })
      .catch((error) => {
        console.log(error.message)
      });
}

