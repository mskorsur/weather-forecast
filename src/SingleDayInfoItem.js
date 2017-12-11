import React from 'react';

class SingleDayInfoItem extends React.Component {
    render() {
        return (
          <tr>
            <td>{this.props.time}</td>
            <td>{this.props.status}</td>
            <td>{this.props.temp}</td>
            <td>{this.props.pressure}</td>
            <td>{this.props.humid}</td>
            <td>{this.props.wind}</td>
          </tr>
        );
    }
}

export default SingleDayInfoItem;