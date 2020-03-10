import React, { Component } from 'react';
import { connect } from "react-redux"
import { getUserEvents, deleteEvent } from "../redux/eventReducer"
import EditModal from './EditModal'

class DisplayProfileEvents extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            event_id: 9999
        }
    }
    componentDidMount() {
        this.props.getUserEvents()
    }
    handleClick = (event_id) => {
        this.props.deleteEvent(event_id)
        this.props.getUserEvents()
        console.log(event_id)
    }
    togglePop = (id) => {
        console.log('working')
        this.setState({
            open: !this.state.open,
            event_id: id
        })
    }
    render() {
        const mapped = this.props.event.profileEvents.map(element => {
            return (
                <div id='cardV2'>
                    <h4>Event: {element.event_name}</h4>
                    <h4>Date: {element.dateofevent}</h4>
                    <h4>At: {element.starttime}</h4>
                    <h4>Ends: {element.endtime}</h4>
                    <button onClick={() => this.handleClick(element.event_id)}>Delete</button>

                    <button onClick={() => this.togglePop(element.event_id)}>Edit</button>

                </div>
            )
        })
        return (
            <div className='profilecard'>
                {this.state.open ? <EditModal toggle={this.togglePop} event_id={this.state.event_id} /> : ''}
                {mapped}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ event: reduxState.event })

export default connect(mapStateToProps, { getUserEvents, deleteEvent })(DisplayProfileEvents);