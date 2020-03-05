import React, { Component } from 'react';
import { connect } from "react-redux"
import { getAllEvents } from "../redux/eventReducer"
import { getSession } from "../redux/userReducer"
import { Redirect, Link } from "react-router-dom";

class Discover extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getSession()
        this.props.getAllEvents()
        console.log(this.props)
    }
    render() {
        if (!this.props.user.users_id) {
            return <Redirect to='/' />
        }
        const mapped = this.props.event.discoverEvents.map(element => {
            return (
                <div id='cardV2'>
                    <h4>Event: {element.event_name}</h4>
                    <h4>Date: {element.dateofevent}</h4>
                    <h4>Location: {element.address}</h4>
                    <h4>At: {element.starttime}</h4>
                    <h4>{element.attendees} coming</h4>
                </div>
            )
        })
        return (
            <div className='profilecard'>
                {mapped}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ event: reduxState.event, user: reduxState.user })

export default connect(mapStateToProps, { getAllEvents, getSession })(Discover);