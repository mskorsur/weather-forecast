import React from 'react';
import './WeatherBox.css';

class WeatherBox extends React.Component {
    render() {
        return (
            <div className={this.applyClass()}>
                <header>
                    {this.props.weekDay}
                </header>
                <img onClick={this.handleClick} src={this.props.weatherImage} alt="weather-icon" />
                <footer>
                    <strong>{this.props.highestTemp}&deg;C</strong> {this.props.lowestTemp}&deg;C
                </footer>
            </div>
        );
    }

    handleClick = () => {
        this.props.handleSelect(this.props.weekDay);
    }

    applyClass = () => {
       if (this.props.selectedDay === this.props.weekDay) {
           return "weather-box selected";
       }
       else {
           return "weather-box not-selected";
       }
    }
}

export default WeatherBox;