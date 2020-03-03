import React, { Component } from 'react';
import CalendarEvent from './CalendarEvent'
import ".././App.scss"
// import ReactMapGl from "react-map-gl"
import { connect } from "react-redux";
import { postEvent, getUserEvents } from "../redux/eventReducer"
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
    onSubmit = () =>{
        const {event_name, address, sport, dateofevent, starttime, endtime} = this.state
        this.props.postEvent(event_name, address, sport, dateofevent, starttime, endtime)
        this.setState({shouldRedirect: true})
        this.props.getUserEvents()
        console.log(typeof dateofevent)
    }
    render() {
        if(this.state.shouldRedirect){
            // return <Redirect to='/profile'/>
        }
        return (
            <div id='cardV3'> 
                Add Events
                <input className='inputEvent'
                    name='event_name'
                    placeholder='Event Name'
                    onChange={this.handleChange}
                />
                <input className='inputEvent'
                    name='address'
                    placeholder='Address'
                    onChange={this.handleChange}
                />
                <input className='inputEvent'
                    name='sport'
                    placeholder='Sport'
                    onChange={this.handleChange}
                />
                <input className='inputEvent'
                    name='dateofevent'
                    type='date'
                    onChange={this.handleChange}
                />
                <input className='inputEvent'
                    name='starttime'
                    placeholder='Start Time'
                    type='time'
                    onChange={this.handleChange} />
                <input className='inputEvent'
                    name='endtime'
                    placeholder='End Time'
                    type='time'
                    onChange={this.handleChange} />
                {/* <ReactMapGl>

                </ReactMapGl> */}
                <button id='button2' onClick={this.onSubmit}>Post Event</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ event: reduxState.event })

export default connect(mapStateToProps, { postEvent, getUserEvents })(Events); 