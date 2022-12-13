const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { updateUser, getUsers, addUser } = require("../commons");
const UserModel = require("../model/User");

router.get("/", (req, res) => {
  res.status(200).send("User Route is active");
});

router.post("/signin", (req, res) => {
  const reqBody = req.body;

  if (!reqBody.username || !reqBody.password) {
    return res.status(400).send("Invalid signup details");
  }

  UserModel.findOne({ username: reqBody.username, password: reqBody.password }).then(data => {
    if (data) {
      const token = jwt.sign(
        { username: reqBody.username, password: reqBody.password },
        "thisisasecret",
        { expiresIn: "1h" }
      );
      res.header("Authentication", token);
      if (req.headers["auth-cookie"]) {
        res.cookie("Auth", token);
      }
      res.status(200).send({});
    } else {
      res.status(400).send("Invalid username or password");
    }
  }).catch(err => {
    console.log(err);
    res.status(500).send("Server error in signin");
  })
});

router.post("/", (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);
  if (!reqBody.username || !reqBody.password) {
    return res.status(400).send("Invalid signup details");
  }

  const user = new UserModel({ username: reqBody.username, password: reqBody.password, email: reqBody?.email || "" })

  return user.save().then(doc => {
    console.log("User is added to MongoDB");
    res.status(201).send("User added successfuly");
  }).catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});

module.exports.router = router;
