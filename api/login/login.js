const express = require('express');
const router = express.Router();


router.post('/', (req,res,next) => {
    console.log(req.body.id);
    console.log(req.body.pwd);
    res.status(200).json({
        message: 'handling post req to /login'
    })
});

module.exports = router;