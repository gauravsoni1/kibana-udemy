const express = require("express");
const router = express.Router();
const ProductModel = require("../model/Product");

router.get("/", (req, res) => {
  res.send("Enter some item to search");
});

router.get("/:item", (req, res) => {
  const queryParams = req.query;
  const urlParams = req.params.item;
  const queryParamsExist = Object.keys(queryParams).length > 0;
  let response = {
    products: []
  };

  queryParamsExist ? (response.queryParams = queryParams) : null;
  urlParams ? (response.urlParams = urlParams) : null;

  ProductModel.find({ title: { "$regex": urlParams, "$options": "i" } }).then(data => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("Product not found")
    }
  }).catch(err => {
    console.log(err);
    res.status(500).send("Error searching Product");
  })
});

module.exports = router;
