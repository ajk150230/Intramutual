import React, { Component } from 'react';
import axios from "axios"
import {Redirect} from "react-router-dom"
import { connect } from "react-redux";
import { registerProfile } from "../redux/userReducer";

class Register extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            company: "",
            sport: "",
            city: "",
            shouldRedirect: false,
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        const {email, password, firstname, lastname, company, sport, city} = this.state
        const user = {email, password, firstname, lastname, company, sport, city}
        this.setState({shouldRedirect: true})
        this.props.registerProfile(user)
    }
    render() {
        if (this.state.shouldRedirect){
            return <Redirect to="/Profile" />
        }
        return (
            <form>
                 <input 
                 name='email'
                 type="text"
                 placeholder='Email'
                 onChange ={this.handleChange}/>
                 <input 
                 name='firstname'
                 type="text"
                 placeholder='First Name'
                 onChange ={this.handleChange}/>
                 <input 
                 name='lastname'
                 type="text"
                 placeholder='Last Name'
                 onChange ={this.handleChange}/>
                 <input 
                 name='password'
                 type="text"
                 placeholder='Password'
                 onChange ={this.handleChange}/>
                 <input 
                 name='company'
                 type="text"
                 placeholder='Company Name'
                 onChange ={this.handleChange}/>
                 <input 
                 name='sport'
                 type="text"
                 placeholder='Sport'
                 onChange ={this.handleChange}/>
                 <input 
                 name='city'
                 type="text"
                 placeholder='City'
                 onChange ={this.handleChange}/>
                 <button onClick={this.handleClick}>Create an Account</button>
            </form>
        );
    }
}

const mapStateToProps = (reduxState) => ({user: reduxState.user})

export default connect(mapStateToProps, {registerProfile})(Register);