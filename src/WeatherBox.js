import React from 'react';
import './WeatherBox.css';

class WeatherBox extends React.Component {
    render() {
        return (
            <div className="weather-box">
                <header>{this.props.weekDay}</header>
                <img src={this.props.weatherImage} alt="weather-icon" />
                <footer><strong>{this.props.highestTemp}&deg;C</strong> {this.props.lowestTemp}&deg;C</footer>
            </div>
        );
    }
}

export default WeatherBox;