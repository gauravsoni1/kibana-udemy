// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: '',
    
    // Use if APM Server requires a secret token
    secretToken: 'QVtbXUb1SArSNkmQ0W',
    
    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'https://3db464537f044c269b47a3baa7d91eef.apm.us-central1.gcp.cloud.es.io:443',
    
    // Set the service environment
    environment: 'production'
    })

module.exports = apm;