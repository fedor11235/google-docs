import axios from "axios";
import tunnel  from 'tunnel';

const agent = tunnel.httpsOverHttp({
  proxy: {
    host: 'https://cors-anywhere.herokuapp.com/',
    port: 8000,
   },
});

const axiosInstance = axios.create({
  baseURL: 'localhost:5000/api',
  httpsAgent: agent,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Content-Type': 'application/json',
  // },
});
export default axiosInstance;

// var axios = require('axios');

// const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=4eb78b09ae5168929d6d8e623d13749f';

// module.exports = {
//     getTemp: function (location){
//         var encodedLocation = encodeURIComponent(location);
//         var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
//         const proxy = "https://cors-anywhere.herokuapp.com/"; // new line
//         return axios.get(proxy + requestUrl).then(function (res) {
//                 if (res.data.cod && res.data.message){
//                 throw new Error(res.data.message);
//             } else {
//                 return res.data.main.temp;
//             }
//         }, function (res){
//             throw new Error(res.data.message);
//         });
//     }
// } 
