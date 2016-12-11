var React = require('react');

var About = (props) => (
  <div>
    <h1 className="text-center">About</h1>
    <p>
      This is a weather application build on React. I have buit this
      for The Complete React Web App Developer Course
    </p>
    <p>
      Her are some of the tools i used:
    </p>
    <ul>
      <li>
        <a href="https:\\facebook.github.io/react">React</a> - This was the
          JavaScript framework used
      </li>
      <li>
        <a href="https://openweathermap.org">Open Weather Map</a>
          - I used Open Weather Map to search for weather data by city name
      </li>
    </ul>
  </div>
);
module.exports = About;
