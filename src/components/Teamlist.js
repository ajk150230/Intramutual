import React, { Component } from 'react';
import { connect } from "react-redux"
import { joinWaitlist, getTeamList } from "../redux/rosterReducer"

class Teamlist extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {
        const event_id = this.props.event_id
        this.props.getTeamList(event_id)
    }
    handleClick(rosters_id){
        const event_id = this.props.event_id        
        const id = {rosters_id, event_id}
        this.props.joinWaitlist(id)
        this.props.toggle()
    }
    render() {
        console.log(this.props.roster.rosters)
        const mapped = this.props.roster.rosters.map(element=>{
            return(
                <div>
                    <button onClick={()=>this.handleClick(element.rosters_id)}>{element.team_name}</button>
                </div>
            )
        })
            return(
            <div className="modal-background">
                <div className="modal">
                    Select a Team to join
                    {mapped}
                    <button id='button3' onClick={this.props.toggle}>Cancel</button>
                </div>
            </div>
            );
    }
}
const mapStateToProps = (reduxState) => ({ event: reduxState.event, user: reduxState.user, roster: reduxState.roster })

export default connect(mapStateToProps, { joinWaitlist, getTeamList })(Teamlist);