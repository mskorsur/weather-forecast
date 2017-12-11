import React from 'react';
import './SingleDay.css';

import SingleDayInfoItem from './SingleDayInfoItem.js';

const DATA = [
    {time: '0:00', status: 'Clear', temp: '16', humidity: '72%', pressure: '1044.14', wind: '2.7'},
    {time: '3:00', status: 'Clear', temp: '16', humidity: '72%', pressure: '1044.14', wind: '2.7'},
    {time: '6:00', status: 'Clear', temp: '16', humidity: '72%', pressure: '1044.14', wind: '2.7'},
    {time: '9:00', status: 'Clear', temp: '18', humidity: '72%', pressure: '1044.14', wind: '2.7'},
    {time: '12:00', status: 'Clouds', temp: '22', humidity: '72%', pressure: '1044.14', wind: '2.7'},
    {time: '15:00', status: 'Clouds', temp: '21', humidity: '72%', pressure: '1044.14', wind: '2.7'},
    {time: '18:00', status: 'Clouds', temp: '20', humidity: '72%', pressure: '1044.14', wind: '2.7'},
    {time: '21:00', status: 'Clouds', temp: '17', humidity: '72%', pressure: '1044.14', wind: '2.7'}
];

class SingleDayInfoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.renderInfoItems = this.renderInfoItems.bind(this);
    }

    render() {
        return (
            <div className="single-day-container">
            <h2>Monday - 11 December 2017</h2>
            <div>
                <table>
                    <tr>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Temperature &deg;C</th>
                      <th>Pressure Pa</th>
                      <th>Humidity %</th>
                      <th>Wind m/s</th>
                    </tr>
                    {this.renderInfoItems()}
                  </table>
            </div>  
            </div>  
        );
    }

    renderInfoItems() {
       return DATA.map(item => {
            return <SingleDayInfoItem key = {item.time}
                                      time={item.time}
                                      status={item.status}
                                      temp={item.temp}
                                      pressure={item.pressure}
                                      humid={item.humidity}
                                      wind={item.wind}/>
        });
    }
}

export default SingleDayInfoContainer;