import React, { Component } from 'react';
import CalendarEvent from './CalendarEvent'
class Events extends Component {
    constructor() {
        super()
        this.state = {
            eventName: '',
            address: '',
            sport: '',
            date: '',
            startTime: 0,
            endTime: 0,
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div> 
                Events
                <input
                    name='eventName'
                    placeholder='Event Name'
                    onChange={this.handleChange}
                />
                <input
                    name='address'
                    placeholder='Address'
                    onChange={this.handleChange}
                />
                <input
                    name='sport'
                    placeholder='Sport'
                    onChange={this.handleChange}
                />
                <input
                    name='date'
                    type='date'
                    onChange={this.handleChange}
                />
                <input
                    name='startTime'
                    placeholder='Start Time'
                    type='time'
                    onChange={this.handleChange} />
                <input
                    name='endTime'
                    placeholder='End Time'
                    type='time'
                    onChange={this.handleChange} />

            </div>
        );
    }
}

export default Events;