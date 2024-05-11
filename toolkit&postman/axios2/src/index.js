import axios from 'axios';

//In browser
// status 200

//via node.js
// status 200

//json.geoiplookup.io в отличие от vk.com разрешает запросы с других доменов

//const axios = require('axios'); 

axios({
    method: 'get',
    url: 'https://json.geoiplookup.io/'
})
.then(
    function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    }
)
