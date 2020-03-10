import React, { Component } from 'react';
import Cloudinary from "./Cloudinary"
import { connect } from "react-redux"
import { createRoster } from "../redux/rosterReducer"

class TeamRoster extends Component {
    constructor(props) {
        super()
        this.state = {
            event_id: 0,
            team_name: '',
            sport:'Etc',
            img_url: ''
        }
    }
    componentDidMount() {
        const targetId = this.props.event_id
        this.setState({event_id: targetId})
        console.log(targetId)
    }
    handleClick = () => {
        console.log('hit')
        this.props.toggle2()
    }
    submit = () => {
        const {team_name, sport, event_id} = this.state
        const team = { event_id, team_name, sport }
        console.log(team)
        this.props.createRoster(team)
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="modal-background">
                <div className="modal">
                    Create a Team
                    <input type="text"
                        name="team_name"
                        placeholder='Enter Team Name'
                        onChange={this.handleChange} />
                    <select name="sport" required
                    onChange={e => this.setState({sport: e.target.value})}>
                        <option disabled selected hidden>--Choose Sport--</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Other">Other</option>
                    </select>
                    <button onClick={this.submit}> Submit</button>
                    <button id='button3' onClick={this.handleClick}>Cancel</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({ roster: reduxState.roster })

export default connect(mapStateToProps, { createRoster })(TeamRoster);