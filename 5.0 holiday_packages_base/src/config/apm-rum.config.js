import {init} from '@elastic/apm-rum';

const apm = init({
    serviceName: "holiday-website",
    serverUrl: '',
    environment: 'production'
})

export default apm