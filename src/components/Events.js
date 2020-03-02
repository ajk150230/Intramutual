import React, { Component } from 'react';
import CalendarEvent from './CalendarEvent'
// import ReactMapGl from "react-map-gl"
import { connect } from "react-redux";
import { postEvent } from "../redux/eventReducer"
import { Redirect, Link } from "react-router-dom";

class Events extends Component {
    constructor() {
        super()
        this.state = {
            event_name: '',
            address: '',
            sport: '',
            dateofevent: '',
            starttime: 0,
            endtime: 0,
            shouldRedirect: false
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClick = () =>{
        const {event_name, address, sport, dateofevent, starttime, endtime} = this.state
        this.props.postEvent(event_name, address, sport, dateofevent, starttime, endtime)
        this.setState({shouldRedirect: true})
        console.log(typeof dateofevent)
    }
    render() {
        if(this.state.shouldRedirect){
            return <Redirect to='/profile'/>
        }
        return (
            <div> 
                Events
                <input
                    name='event_name'
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
                    name='dateofevent'
                    type='date'
                    onChange={this.handleChange}
                />
                <input
                    name='starttime'
                    placeholder='Start Time'
                    type='time'
                    onChange={this.handleChange} />
                <input
                    name='endtime'
                    placeholder='End Time'
                    type='time'
                    onChange={this.handleChange} />
                {/* <ReactMapGl>

                </ReactMapGl> */}
                <button onClick={this.handleClick}>Post Event</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ event: reduxState.event })

export default connect(mapStateToProps, { postEvent })(Events); 