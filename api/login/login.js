const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY || 'secret';


router.post('/', (req,res,next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        if(user.length < 1) {return res.status(401).json({ message: "Failed" });}
        bcrypt.compare(req.body.password,user[0].password,(err,result) => {
            if (err) {return res.status(401).json({ message: "Authentication Failed" });}
            if (result) {
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                },
                secretKey,
                {
                    expiresIn: "1h"
                })
                return res.status(200).json({ 
                    message:'Auth Successfull',
                    token: token
                });
            }
            return res.status(401).json({ message: "Authentication Failed" });
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: "login failed",
        });
      });
});

module.exports = router;