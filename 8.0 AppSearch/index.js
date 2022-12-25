//API GUIDE
//https://www.elastic.co/guide/en/enterprise-search/current/programming-language-clients.html#programming-language-clients-app-search-javascript

const AppSearchClient = require("@elastic/app-search-node");
const apiKey = ''
const baseUrlFn = () => ''
const client = new AppSearchClient(undefined, apiKey, baseUrlFn)


const engineName = 'park-search-engine'
const query = 'volcano national park'
const searchFields = { title: {} }
const resultFields = { title: { raw: {} }, url: { raw: {} } }
const options = { search_fields: searchFields, result_fields: resultFields }

client
    .search(engineName, query, options)
    .then(response => console.log(response?.results))
    .catch(error => console.log(error.errorMessages))