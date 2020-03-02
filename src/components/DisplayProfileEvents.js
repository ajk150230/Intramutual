import React, { Component } from 'react';
import {connect} from "react-redux"
import {getUserEvents, deleteEvent} from "../redux/eventReducer"

class DisplayProfileEvents extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        this.props.getUserEvents()
    }
    handleClick = (event_id) =>{
        this.props.deleteEvent(event_id)
    }
    render() {
        const mapped = this.props.event.profileEvents.map(element => {
            return(
                <div>
                    {element.event_name}
                    {element.dateofevent}
                    {element.starttime}
                    {element.endtime}
                    <button onClick={this.handleClick(element.event_id)}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                {mapped}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({event: reduxState.event})

export default connect(mapStateToProps, {getUserEvents, deleteEvent})(DisplayProfileEvents);