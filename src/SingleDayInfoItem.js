import React from 'react';

class SingleDayInfoItem extends React.Component {
    render() {
        return (
          <tbody>
            <tr>
              <td>{this.props.time}:00</td>
              <td>{this.props.status}</td>
              <td>{this.props.temp}</td>
              <td>{this.props.pressure}</td>
              <td>{this.props.humid}</td>
              <td>{this.props.wind}</td>
            </tr>
          </tbody>
        );
    }
}

export default SingleDayInfoItem;