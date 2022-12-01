const recognize = require('../../vision');

exports.upload_get = (req,res,next) => {
    res.status(200).json({
        message: 'handling post req to /upload'
    })
};

exports.upload_post = async (req,res,next) => {
    const expiryDate = await recognize(req.file.destination + '/' + req.file.filename);
    const expiryYYYY = expiryDate.format("DD/MM/YYYY")
    res.status(200).json({
        message: expiryYYYY
    })
};

