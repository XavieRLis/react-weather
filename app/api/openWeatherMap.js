var axios = require('axios');
// api c7e8955e201026b4c0d47c176c963611
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c7e8955e201026b4c0d47c176c963611&units=metric&lang=ru';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (response) {      
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
          return response.data.main.temp;
      }
    }).catch(function (response) {
      throw new Error(response.data.message);
    });
  }
};
