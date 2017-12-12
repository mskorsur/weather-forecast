import React from 'react';
import './SingleDay.css';

import SingleDayInfoItem from './SingleDayInfoItem.js';

class SingleDayInfoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.renderInfoItems = this.renderInfoItems.bind(this);
    }

    render() {
        return (
            <div className="single-day-container">
            <h2>{this.props.data[0].day} - {this.props.data[0].date.toDateString()}</h2>
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
       return this.props.data.map(item => {
            return <SingleDayInfoItem key = {item.date}
                                      time={item.hour}
                                      status={item.status}
                                      temp={item.temperature}
                                      pressure={item.pressure}
                                      humid={item.humidity}
                                      wind={item.wind}/>
        });
    }
}

export default SingleDayInfoContainer;