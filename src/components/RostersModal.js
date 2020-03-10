import React, { Component } from 'react';
import { connect } from "react-redux"
import { getAllRostersInfo, editRoster } from '../redux/rosterReducer'

class RostersModal extends Component {
    constructor() {
        super()
        this.state = {
            p1: null,
            p2: null,
            p3: null,
            p4: null,
            p5: null,
            numberOfPlayers: 5,
            playerlist: []
        }
    }
    componentDidMount() {
        this.props.getAllRostersInfo(this.props.rosters_id)
    }
    submit = () => {
        const { p1, p2, p3, p4, p5} = this.state
        const rosters_id = this.props.rosters_id
        this.props.editRoster(p1, p2, p3, p4, p5, rosters_id)
    }
    render() {
        const mapped = this.props.roster.attendees.map(element => {
            return (
                <div>
                    {element.firstname} {element.lastname}, {element.company}
                </div>
            )
        })
        return (
            <div className="modal-background">
                <div className="modal">
                    <button id="button3" onClick={this.props.toggle}>Close</button>
                    Players available:
                    <select
                        onChange={e => this.setState({ p1: e.target.value })}>
                        <option>None</option>
                        {this.props.roster.attendees.map(element => {
                            return (
                                <>
                                <option disabled selected hidden>--Choose a Player--</option>
                                <option value={element.users_id}>
                                    {element.firstname} {element.lastname}, {element.company}
                                </option>
                                </>
                            )
                        })}
                    </select>
                    <select
                        onChange={e => this.setState({ p2: e.target.value })}>
                        <option>None</option>
                        {this.props.roster.attendees.map(element => {
                            return (
                                <>
                                <option disabled selected hidden>--Choose a Player--</option>
                                <option value={element.users_id}>
                                    {element.firstname} {element.lastname}, {element.company}
                                </option>
                                </>
                            )
                        })}
                    </select>
                    <select
                        onChange={e => this.setState({ p3: e.target.value })}>
                        <option>None</option>
                        {this.props.roster.attendees.map(element => {
                            return (
                                <>
                                <option disabled selected hidden>--Choose a Player--</option>
                                <option value={element.users_id}>
                                    {element.firstname} {element.lastname}, {element.company}
                                </option>
                                </>
                            )
                        })}
                    </select>
                    <select
                        onChange={e => this.setState({ p4: e.target.value })}>
                        <option>None</option>
                        {this.props.roster.attendees.map(element => {
                            return (
                                <>
                                <option disabled selected hidden>--Choose a Player--</option>
                                <option value={element.users_id}>
                                    {element.firstname} {element.lastname}, {element.company}
                                </option>
                                </>
                            )
                        })}
                    </select>
                    <select
                        onChange={e => this.setState({ p5: e.target.value })}>
                        <option>None</option>
                        {this.props.roster.attendees.map(element => {
                            return (
                                <>
                                <option disabled selected hidden>--Choose a Player--</option>
                                <option value={element.users_id}>
                                    {element.firstname} {element.lastname}, {element.company}
                                </option>
                                </>
                            )
                        })}
                    </select>
                    <button onClick={this.submit}>Submit</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ roster: reduxState.roster })

export default connect(mapStateToProps, { getAllRostersInfo, editRoster })(RostersModal);