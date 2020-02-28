import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";
import axios from 'axios'
import { connect } from "react-redux";
import { loginUser, getSession, updateState } from "../redux/userReducer";

class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            shouldRedirect: false,
        }
    }
    componentDidMount(){
        this.props.getSession()
    }
    handleClick=()=>{
        axios.get('/auth/logout')
            .then(()=>{this.setState({shouldRedirect: true})})
            .catch(err=>{console.log(err)})
    }
    render() {
        if (this.state.shouldRedirect){
            return <Redirect to="/Login" />
        }
        return (
            <div>
                Profile
                <button onClick={this.handleClick}>Logout</button>
                <h1>{this.props.user.firstname} {this.props.user.lastname}</h1>
                <h1>Works at: {this.props.user.company}</h1>
                <h1>Favorite Sport: {this.props.user.sport}</h1>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({user: reduxState.user})

export default connect(mapStateToProps, {loginUser, getSession, updateState})(Profile); 