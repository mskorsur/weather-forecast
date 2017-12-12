import React from 'react';
import { getMonthFromDate } from './dateHelper.js';
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
            <h2>{this.displayFormattedDate()}</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Temperature &deg;C</th>
                        <th>Pressure Pa</th>
                        <th>Humidity %</th>
                        <th>Wind km/h</th>
                        </tr>
                    </thead>
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
                                      wind={this.convertWindDataToKmPerHour(item.wind)}/>
        });
    }

    displayFormattedDate = () => {
        const currentDay = this.props.data[0].day;
        const currentDate = this.props.data[0].date;

        const month = getMonthFromDate(currentDate);
        const dayOfMonth = currentDate.getDate();
        const year = currentDate.getFullYear();

        return `${currentDay} - ${dayOfMonth} ${month} ${year} `;
    }

    convertWindDataToKmPerHour = (dataInMetresPerSecond) => {
        const KmPerHour = dataInMetresPerSecond * 3.6;
        const KmPerHourDecimalString = KmPerHour.toFixed(3);

        return parseFloat(KmPerHourDecimalString);
    }
}

export default SingleDayInfoContainer;