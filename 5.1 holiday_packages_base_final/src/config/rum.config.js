import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({

    // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
    serviceName: 'vacation-booking',

    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'https://3db464537f044c269b47a3baa7d91eef.apm.us-central1.gcp.cloud.es.io:443',

    // Set the service version (required for source map feature)
    serviceVersion: '',

    // Set the service environment
    environment: 'production'
})

export default apm;