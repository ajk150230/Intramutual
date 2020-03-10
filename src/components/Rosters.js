import React, { Component } from 'react';
import RostersModal from "./RostersModal"
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {rostersManager} from "../redux/rosterReducer"
import {getSession} from "../redux/userReducer"
class Rosters extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            rosters_id: 9999
        }
    }
    componentDidMount(){
        this.props.getSession()
        this.props.rostersManager()
    }
    toggle=(id)=>{
        console.log(id)
        this.setState({
            rosters_id: id,
            open: !this.state.open})

    }
    render() {
        if (!this.props.user.users_id) {
            return <Redirect to='/' />
        }
        const mapped = this.props.roster.allmyrosters.map(element =>{
            return(
                <div id='cardV2'>
                    <div>
                    {element.event_name}   
                    </div>
                    <div>
                    {element.team_name}
                    </div>
                    <div>
                    {element.sport}
                    </div>
                    <button onClick={()=>this.toggle(element.rosters_id)}>edit</button>
                </div>
            )
        })
        return (
            <div>
                My Teams
                {mapped}
                {this.state.open ? <RostersModal 
                toggle={this.toggle} rosters_id={this.state.rosters_id}/>:''}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user, roster: reduxState.roster })

export default connect(mapStateToProps, { getSession, rostersManager })(Rosters);