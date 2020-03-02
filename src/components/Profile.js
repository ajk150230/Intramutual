import React, { Component } from 'react';
import DisplayProfileEvents from './DisplayProfileEvents'
import Events from './Events'
import { Redirect, Link } from "react-router-dom";
import axios from 'axios'
import { connect } from "react-redux";
import { loginUser, getSession, updateState, resetState } from "../redux/userReducer";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.props.getSession()
        console.log(getSession())
    }
    handleClick = () => {
        axios.get('/auth/logout')
            .then(
            () => {
                this.props.resetState()
                // const {shouldRedirect} = this.props.user
                // this.props.updateState({ shouldRedirect: true })
                // console.log(shouldRedirect)
            })

            .catch(err => { console.log(err) })
            const usernameProp = this.props.user.username
            this.setState({username: usernameProp})
    }
    render() {
        console.log(this.props.user)
        if (!this.props.user.users_id) {
            return <Redirect to='/' />
        }
        return (
            <div>
                Profile
                <button onClick={this.handleClick}>Logout</button>
                <h1>{this.props.user.firstname} {this.props.user.lastname}</h1>
                <h1>Works at: {this.props.user.company}</h1>
                <h1>Favorite Sport: {this.props.user.sport}</h1>
                <h1>City: {this.props.user.city}</h1>
                <div>
                    <Events/>
                    <DisplayProfileEvents/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({ user: reduxState.user })

export default connect(mapStateToProps, { loginUser, getSession, updateState, resetState })(Profile); 