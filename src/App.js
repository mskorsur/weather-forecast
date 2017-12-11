import React, { Component } from 'react';
import './App.css';

import WeatherBox from './WeatherBox.js';
import SingleDayInfoContainer from './SingleDayInfoContainer.js';

import sun from './images/sun.png'; //Clear
import clouds from './images/clouds.png'; //Clouds
import lightning from './images/lightning.png'; //Thunderstrom
import partlySunny from './images/partlysunny.png';
import storm from './images/storm.png'; //Rain
import snowflake from './images/snowflake.png'; //Snow
import wind from './images/wind.png'; //Additional, description breeze

const DATA = [
  {id: 1, day: 'Monday', highestTemp: 21, lowestTemp: 17, weatherImage: partlySunny},
  {id: 2, day: 'Tuesday', highestTemp: 20, lowestTemp: 18, weatherImage: clouds},
  {id: 3, day: 'Wednesday', highestTemp: 22, lowestTemp: 18, weatherImage: sun},
  {id: 4, day: 'Thursday', highestTemp: 19, lowestTemp: 15, weatherImage: clouds},
  {id: 5, day: 'Friday', highestTemp: 19, lowestTemp: 14, weatherImage: storm},
]

class App extends Component {
  constructor(props){
    super(props);

    this.renderWeatherBoxes = this.renderWeatherBoxes.bind(this);
  }

  render() {
    return (
      <div>
        <h1 className="title">Weather Forecast</h1>
        <div className="container">
          {this.renderWeatherBoxes()}
        </div>
        <SingleDayInfoContainer />
      </div>
    );
  }

  renderWeatherBoxes() {
    return DATA.map(day => {
      return <WeatherBox key={day.id} 
                         weekDay={day.day} 
                         highestTemp={day.highestTemp} 
                         lowestTemp={day.lowestTemp}
                         weatherImage={day.weatherImage}/>
    });
  }

}

export default App;
