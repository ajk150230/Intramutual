import React, { Component } from 'react';
import Teamlist from './Teamlist'
import TeamRoster from './TeamRoster'
import { connect } from "react-redux"
import { getAllEvents } from "../redux/eventReducer"
import { getSession } from "../redux/userReducer"
import { joinWaitlist } from "../redux/rosterReducer"
import { Redirect, Link } from "react-router-dom";

class Discover extends Component {
    constructor() {
        super()
        this.state={
            open: false,
            open2: false,
            event_id: 99
        }
    }
    componentDidMount() {
        this.props.getSession()
        this.props.getAllEvents()
        console.log(this.props)
    }
    handleClick = (id) => {
        this.props.getAllEvents()
        this.setState({event_id: id})
        this.togglePop()
    }
    handleClick2 = (id) => {
        this.props.getAllEvents()
        this.setState({event_id: id})
        this.togglePop2()
    }
    togglePop = () => {
        this.setState({
            open: !this.state.open,
        })
    }
    togglePop2 = () => {
        this.setState({
            open2: !this.state.open2,
        })
    }
    render() {
        if (!this.props.user.users_id) {
            return <Redirect to='/' />
        }
        const mapped = this.props.event.discoverEvents.map(element => {
            return (
                <div id='cardV2' style={{ "background": `url(${element.img})`}}>
                    <div id='cardplate'>
                    <h4>Event: {element.event_name}</h4>
                    <h4>Date: {element.dateofevent}</h4>
                    <h4>Location: {element.address}</h4>
                    <h4>{element.attendees} coming</h4>
                    <button onClick={()=>this.handleClick2(element.event_id)}>Create a Team</button>
                    <button onClick={()=>this.handleClick(element.event_id)}>Join a Team</button>
                    </div>
                </div>
            )
        })
        return (
            <section className='profilecard'>
                <div id='banner'>
                    Find your sport
                </div>
                <div className='profilecard'>
                    {this.state.open ? <Teamlist toggle={this.togglePop} event_id={this.state.event_id}/>:''}
                    {this.state.open2 ? <TeamRoster toggle2={this.togglePop2} event_id={this.state.event_id}/>:''}
                    {mapped}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (reduxState) => ({ event: reduxState.event, user: reduxState.user, roster: reduxState.roster })

export default connect(mapStateToProps, { getAllEvents, getSession, joinWaitlist })(Discover);