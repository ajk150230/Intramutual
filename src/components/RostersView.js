import React, { Component } from 'react';
import { connect } from "react-redux"
import { getAllRostersInfo } from '../redux/rosterReducer'

class RostersView extends Component {
    componentDidMount(){
        this.props.getAllRostersInfo(this.props.rosters_id)
    }
    render() {
        const mapped = this.props.roster.attendees.map(element=>{
            return (
                <div>
                    {element.firstname} {element.lastname}, {element.company}
                </div>
            )
        })
        return (
            <div className="modal-background">
                <div className="modal">
                    <p>Players Registered</p>
                    <p>{mapped}</p>
                    <button id='button3' onClick={this.props.toggleView}>Cancel</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ roster: reduxState.roster })

export default connect(mapStateToProps, { getAllRostersInfo })(RostersView);