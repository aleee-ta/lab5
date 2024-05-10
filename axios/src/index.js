import axios from 'axios';
//In browser
//Access to XMLHttpRequest at 'https://vk.com/' from origin 'http://127.0.0.1:5500' 
//has been blocked by CORS policy: 
//No 'Access-Control-Allow-Origin' header is present on the requested resource.

//via node.js
// status 200

//В браузере запрос был блокирован благодаря политике CORS, в nodejs такой проблемы не было.
//const axios = require('axios'); 

axios({
    method: 'get',
    url: 'https://vk.com'
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
