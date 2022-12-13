// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'e-commerce-mongo',

    // Use if APM Server requires a secret token
    secretToken: '',

    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'https://633d821292c349d2a2b4e801fec670ba.apm.us-central1.gcp.cloud.es.io:443',

    // Set the service environment
    environment: 'production'
})

module.exports = apm;