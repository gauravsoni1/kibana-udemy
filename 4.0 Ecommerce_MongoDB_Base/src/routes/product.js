const express = require("express");
const router = express.Router();
const path = require("path");
const { randomBytes } = require("crypto");
const jwt = require("jsonwebtoken");
const ProductModel = require("../model/Product");

const product = {};

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
    let newProduct = new ProductModel({ title, price, description });
    newProduct.save().then((data) => {
      res.status(201).send(data);
    }).catch(err => {
      res.status(400).send(err);
    })
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

  if (!Array.isArray(req.body)) {
    return res.status(400).send("Invalid request");
  } else {
    console.log(req.body);
    const productList = [];
    req.body.map((item) => {
      let newProduct = new ProductModel({
        title: item["title"],
        price: item["price"],
        description: item["description"],
      });
      productList.push(newProduct);
    });
    ProductModel.create(productList).then(data => {
      console.log(data);
      res.status(201).send({});
    }).catch(err => {
      console.log(err);
      res.status(500).send("Error adding the product");
    })
  }
});

module.exports = router;
