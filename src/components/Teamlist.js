import React, { Component } from 'react';
import { connect } from "react-redux"
import { joinWaitlist, getTeamList } from "../redux/rosterReducer"

class Teamlist extends Component {
    constructor() {
        super()
        this.state = {
            event_id: 999
        }
    }
    componentDidMount() {
        const event_id = this.props.event_id
        this.props.getTeamList(event_id)
    }
    render() {
        console.log(this.props.roster.rosters)
        const mapped = this.props.roster.rosters.map(element=>{
            return(
                <div>
                    {element.team_name}
                </div>
            )
        })
            return(
            <div className="modal-background">
                <div className="modal">
                    {mapped}
                    <button id='button3' onClick={this.props.toggle}>Cancel</button>
                </div>
            </div>
            );
    }
}
const mapStateToProps = (reduxState) => ({ event: reduxState.event, user: reduxState.user, roster: reduxState.roster })

export default connect(mapStateToProps, { joinWaitlist, getTeamList })(Teamlist);