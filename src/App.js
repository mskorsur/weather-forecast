import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import WeatherBox from './WeatherBox.js';
import SingleDayInfoContainer from './SingleDayInfoContainer.js';

import sun from './images/sun.png'; //Clear
import clouds from './images/clouds.png'; //Clouds
import lightning from './images/lightning.png'; //Thunderstrom
import partlySunny from './images/partlysunny.png'; //Clouds, description few clouds
import storm from './images/storm.png'; //Rain
import snowflake from './images/snowflake.png'; //Snow
import wind from './images/wind.png'; //Additional

const API_KEY = '8f0699dbe43aa56965f371ac279724f7';
const CITY_ID = '3190261';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      weatherData: [],
      weatherBoxesData: [],
      isDaySelected: false,
      currentlySelectedDay: ''
    }

    this.renderWeatherBoxes = this.renderWeatherBoxes.bind(this);
    this.renderSelectedDayInformation = this.renderSelectedDayInformation.bind(this);
    this.parseWeatherData = this.parseWeatherData.bind(this);
  }

  componentWillMount() {
     let parsedData = [];
     let noonData = [];

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&APPID=${API_KEY}&units=metric`)
    .then(response => {
      parsedData = this.parseWeatherData(response.data.list);
      noonData = this.getNoonWeather(parsedData);

      this.setState({
        weatherData: parsedData,
        weatherBoxesData: noonData,
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  parseWeatherData(data) {
    return data.map(item => {
        return {
            date: new Date(item.dt_txt),
            day: this.getDayFromDate(new Date(item.dt_txt)),
            hour: new Date(item.dt_txt).getHours(),
            temperature: item.main.temp,
            temp_max: item.main.temp_max,
            temp_min: item.main.temp_min,
            pressure: item.main.pressure,
            humidity: item.main.humidity,
            status: item.weather[0].main,
            status_desc: item.weather[0].description,
            wind: item.wind.speed
        }
    });
  }

  getDayFromDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  getNoonWeather = (data) => {
    return data.filter(item => item.hour === 12);
  }

  getWeatherSameDay = (day, data) => {
    return data.filter(item => item.day === day);
  }

  render() {
    return (
      <div>
        <h1 className="title">Weather Forecast</h1>
        <div className="container">
          {this.renderWeatherBoxes()}
        </div>
        {this.renderSelectedDayInformation()}
      </div>
    );
  }

  renderWeatherBoxes() {
    return this.state.weatherBoxesData.map(item => {
      return <WeatherBox key={item.date} 
                         weekDay={item.day} 
                         highestTemp={item.temp_max} 
                         lowestTemp={item.temp_min}
                         weatherImage={this.selectImageBasedOnWeather(item.status, item.status_desc)}
                         handleSelect={this.handleClickWeatherBox}
                         selectedDay={this.state.currentlySelectedDay}/>
    });
  }

  renderSelectedDayInformation() {
    if (this.state.isDaySelected) {
      const singleDayData = 
            this.getWeatherSameDay(this.state.currentlySelectedDay, this.state.weatherData);
      return <SingleDayInfoContainer data={singleDayData}/>;
    }
  }

  handleClickWeatherBox = (selectedDay) => {
    this.setState({
      isDaySelected: true,
      currentlySelectedDay: selectedDay
    });
  }

  selectImageBasedOnWeather = (weatherStatus, weatherDescription) => {
    switch(weatherStatus) {
      case 'Clear':
        return sun;
      case 'Rain':
        return storm;
      case 'Thunderstorm':
        return lightning;
      case 'Snow':
        return snowflake;
      case 'Additional':
        return wind;
      case 'Clouds':
        if (weatherDescription === 'few clouds' || 
            weatherDescription === 'scattered clouds') {
              return partlySunny;
        }
        else {
          return clouds;
        }
    }
  }

}

export default App;
