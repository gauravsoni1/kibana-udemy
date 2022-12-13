const { query } = require("express");
const express = require("express");
const router = express.Router();
const productsData = require('../productsData');

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

  response['products'] = productsData.filter(prd => {
    console.log(prd);

    return prd?.title?.toLowerCase().includes(urlParams?.toLowerCase())
  });

  console.log(`URL Parameters -- ${JSON.stringify(req.params)}`);
  if (queryParamsExist) {
    console.log(req);
  }

  res.send(response);
});

module.exports = router;
