const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middleware/check-auth");
const SignupController = require('../controller/signup');

mongoose.connect("mongodb://127.0.0.1:27017/signup", {
  useNewUrlParser: true,
});

router.post("/", SignupController.signup_post);
router.get("/", checkAuth, SignupController.signup_get);

module.exports = router;
