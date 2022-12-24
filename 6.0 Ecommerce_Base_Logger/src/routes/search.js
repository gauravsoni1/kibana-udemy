const { query } = require("express");
const express = require("express");
const router = express.Router();
const productsData = require('../productsData');
const logger = require("../config/logger.config");
const dbService = require('../service/dbService');

router.get("/", (req, res) => {
  logger.info("searchController, path: / ");
  res.send("Enter some item to search");
});

router.get("/:item", async (req, res) => {
  logger.info("searchController, path: /:item ");

  const queryParams = req.query;
  const urlParams = req.params.item;

  const paramsLogs = JSON.stringify({ queryParams, urlParams });
  logger.info(`searchController, path: /:item , params: ${paramsLogs}`);

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

    logger.info("searchController, path: /:item ")
    console.log(req);
  }

  let data = null;
  try {
    data = await dbService();
  } catch (error) {
    data = "No Data";
  }

  res.send(response);
});

module.exports = router;
