const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");

mongoose.connect("mongodb://127.0.0.1:27017/signup", {
  useNewUrlParser: true,
});
router.post("/", (req, res, next) => {
  User.find({email:req.body.email})
  .then(user => {
    if(user.length >= 1) {return res.status(409).json({ error: "Email is already in use" }); }
    else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({ error: "Could not calculate hash" });
            } else {
              const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash,
              });
              user
                .save()
                .then((result) => {
                  console.log(result);
                  res.status(200).json({
                    message: "data inserted to db successfull",
                  });
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).json({
                    message: "data inserted to db failed",
                  });
                });
            }
          });
    }
  });
  // res.status(200).json({
  //     message: 'handling post req to /signup'
  // })
});

router.get("/", (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.password);
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
  });
  // res.status(200).json({
  //     message: 'handling post req to /signup'
  // })
});

module.exports = router;
