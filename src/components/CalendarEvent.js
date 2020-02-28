import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class CalendarEvent extends React.Component {
    state = {
        startDate: new Date(),
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    minDate={new Date()}
                    withPortal
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={15}
                    dateFormat='Pp'
                />
                {console.log(this.state.startDate)}
            </div>
        );
    }
}