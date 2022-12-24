// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: '',
    
    // Use if APM Server requires a secret token
    secretToken: '',
    
    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: '',
    
    // Set the service environment
    environment: 'production'
    })

module.exports = apm;