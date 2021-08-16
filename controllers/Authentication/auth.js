const express = require("express");
var router = express.Router();
const AuthenticationModel = require("../../models/AuthenticationModel");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
  try {
    const {  UserName, Contact, UserRole,Email,Password, PasswordVerify } = req.body;
    
    if (!Email ||!Contact ||!UserRole || !UserName || !Password || !PasswordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });

    if (Password.length < 6)
      return res
        .status(400)
        .json({
          errorMessage: "Please enter a password of at least 6 characters",
        });

    if (Password !== PasswordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter the same password twice" });

    const existingUser = await AuthenticationModel.findOne({ Email });

    if (existingUser)
      return res
        .status(400)
        .json({ errorMessage: "already exists an account with this email" });
     
    const salt = await bcrypt.genSalt();
    const PasswordHash = await bcrypt.hash(Password, salt);

    const newUser = new AuthenticationModel({
      UserName,
      Contact,
      Email,
      UserRole,
      PasswordHash,
    });
    const saveUser = await newUser.save();
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    
    if (!Email || !Password) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });
    }
    const existingUser = await AuthenticationModel.findOne({ Email });

    if (!existingUser) {
      return res.status(401).json({ errorMessage: "Wrong email or password" });
    }
    const passwordCorrect = await bcrypt.compare(
      Password,
      existingUser.PasswordHash
    );

    if (!passwordCorrect) {
      return res.status(401).json({ errorMessage: "Wrong email or password" });
    }
    const token = jwt.sign({
      user: existingUser._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
    }).send({
       users: existingUser,
      });
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", async (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send(true);
});
module.exports = router;
