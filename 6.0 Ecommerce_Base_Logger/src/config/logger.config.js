const apm = require("./apm.config");
const winston = require("winston");
const { ElasticsearchTransport } = require("winston-elasticsearch");

const elasticsearchTransport = new ElasticsearchTransport({
    apm,
    level: "info",
    clientOpts: {
        //Add the ElasticSearch URL
        node: "",
        //Add the API key for elasticsearch
        auth: {
            apiKey: ""
        }
    }
});

var logger = winston.createLogger({
    transports: elasticsearchTransport,
    level: 'info'
});

module.exports = logger;