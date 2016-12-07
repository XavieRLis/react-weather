var React = require('react');

var WeatherMessage = ({temp, city}) => (
  <h3>It's it {temp} in {city}.</h3>
);

module.exports = WeatherMessage;
