import React, { Component } from "react";
import "../App.scss"
import { connect } from "react-redux";
import { editEvent } from "../redux/eventReducer"
class EditModal extends Component {
    constructor() {
        super()
        this.state = {
            event_id: 0,
            event_name: '',
            address: '',
            sport: '',
            dateofevent: '',
            starttime: 0,
            endtime: 0,
        }
    }
    componentDidMount(){
        const id = this.props.event_id
        this.setState({event_id: id})
    }
    handleClick = () => {
        this.props.toggle();
    };
    onSubmit = () => {
        const {event_id, event_name, address, sport, dateofevent, starttime, endtime} = this.state
        this.props.editEvent(event_id, event_name, address, sport, dateofevent, starttime, endtime)
        this.props.toggle();
        console.log(event_id, event_name, address, sport, dateofevent, starttime, endtime)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div className="modal-background">
                <div className="modal">
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
                    <select name="sport" required
                    onChange={e => this.setState({sport: e.target.value})}>
                        <option disabled selected hidden>--Choose Sport--</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Other">Other</option>
                    </select>
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
                    <button id='button2' onClick={this.onSubmit}> Submit</button>
                    <button id='button3' onClick={this.handleClick}>Cancel</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ event: reduxState.event })

export default connect(mapStateToProps, { editEvent })(EditModal); 