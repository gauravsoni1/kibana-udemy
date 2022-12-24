const express = require("express");
const router = express.Router();
const path = require("path");
const { randomBytes } = require("crypto");
const jwt = require("jsonwebtoken");
const productList = require('../productsData');

const product = {};

router.get("/:productid", (req, res) => {
  console.log("Retriving the product by ID", req.params.productid);
  res.sendFile(path.join(__dirname + "/partials/product.html"));
});

router.get("/details/:productid", (req, res) => {
  const prdId = req.params.productid;

  let response = product[prdId];

  if (!response) {
    return res.send(404).send({});
  }

  res.send(response);
});

router.post("/", (req, res) => {
  let { title, price, description } = req.body;
  console.log(req.body);

  //Read the auth headers
  let authHeader = req.headers.authorization;
  console.log("AUTH HEADER", authHeader);
  if (!authHeader) {
    return res.status(401).send("Unauthorized!");
  } else {
    authHeader = authHeader.split(" ")[1];
    try {
      jwt.verify(authHeader, "thisisasecret");
    } catch (error) {
      return res.status(400).send("Invalid auth headers");
    }
  }
  //Check if the title and price are sent in the request
  if (!title || !price) {
    return res.status(400).send("Invalid data");
  } else {
    let newProduct = {};
    const id = randomBytes(4).toString("hex");
    newProduct = { id, title, price, description };
    productList.push(newProduct);
    return res.status(201).send({ title, price, id });
  }
});

router.post("/multiple", (req, res) => {
  //Read the auth headers
  let authHeader = req.headers.authorization;
  console.log("AUTH HEADER", authHeader);
  if (!authHeader) {
    return res.status(401).send("Unauthorized!");
  } else {
    authHeader = authHeader.split(" ")[1];
    const isValidToken = jwt.verify(authHeader, "thisisasecret");
    if (!isValidToken) {
      return res.status(400).send("Invalid auth headers");
    }
  }

  console.log(authHeader);
  if (!Array.isArray(req.body)) {
    return res.status(400).send("Invalid request");
  } else {
    console.log(req.body);
    req.body.map((item) => {
      let newProduct = {};
      const id = randomBytes(4).toString("hex");
      newProduct = {
        id,
        title: item["title"],
        price: item["price"],
        description: item["description"],
      };
      productList.push(newProduct);
    });
    return res.status(201).send({});
  }
});

module.exports = router;
