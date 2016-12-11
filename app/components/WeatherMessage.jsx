var React = require('react');

var WeatherMessage = ({temp, city}) => (
  <h3 className="text-center">It's it {temp} in {city}.</h3>
);

module.exports = WeatherMessage;
