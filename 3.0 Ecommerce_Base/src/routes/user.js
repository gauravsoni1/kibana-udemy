const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { updateUser, getUsers, addUser } = require("../commons");

router.get("/", (req, res) => {
  res.status(400).send("Invalid route");
});

router.post("/signin", (req, res) => {
  const reqBody = req.body;
  const Users = getUsers();

  if (!reqBody.username || !reqBody.password) {
    return res.status(400).send("Invalid signup details");
  }

  let userFound = Users.find((user) => {
    if (
      user.username === reqBody.username &&
      user.password === reqBody.password
    ) {
      return user;
    }
  });

  if (userFound) {
    const token = jwt.sign(
      { username: reqBody.username, password: reqBody.password },
      "thisisasecret",
      { expiresIn: "1h" }
    );

    //Attach the Authentication token as a cookie
    res.header("Authentication", token);
    userFound.token = token;
    userFound.orders = [];
    updateUser(userFound);
    // Send token in cookie also
    console.log(req.headers);
    if (req.headers["auth-cookie"]) {
      res.cookie("Auth", token);
    }

    res.status(200).send({});
  } else {
    res.status(400).send("Username or password is incorrect");
  }
});

router.post("/", (req, res) => {
  const reqBody = req.body;
  const user = {};
  console.log(reqBody);
  if (!reqBody.username || !reqBody.password) {
    return res.status(400).send("Invalid signup details");
  }
  const userId = uuidv4();
  user.id = userId;
  user.username = req.body.username;
  user.password = req.body.password;

  let resData = {
    username: reqBody.username,
    id: userId,
  };
  if (req.headers["show-headers"]) {
    resData.headers = req.headers;
  }

  addUser(user);
  res.status(201).send(resData);
});

module.exports.router = router;
