import React, { Component } from 'react';
import axios from "axios"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { registerProfile } from "../redux/userReducer";

class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            company: "",
            sport: "",
            city: "",
            imgURL: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
        const { email, password, firstname, lastname, company, sport, city } = this.state
        const user = { email, password, firstname, lastname, company, sport, city }
        this.props.registerProfile(user)
    }
    render() {
        if (this.props.user.email) {
            return <Redirect to="/Profile" />
        }
        console.log(this.props.user)
        return (
            <div className='register'>
                <form className='card'>
                    <input
                        name='email'
                        type="text"
                        placeholder='Email'
                        onChange={this.handleChange} 
                        autocomplete="off"/>
                    <input
                        name='firstname'
                        type="text"
                        placeholder='First Name'
                        onChange={this.handleChange} />
                    <input
                        name='lastname'
                        type="text"
                        placeholder='Last Name'
                        onChange={this.handleChange} />
                    <input
                        name='password'
                        type="password"
                        placeholder='Password'
                        onChange={this.handleChange} />
                    <input
                        name='company'
                        type="text"
                        placeholder='Company Name'
                        onChange={this.handleChange} />
                    <select name="sport" required
                        onChange={e => this.setState({ sport: e.target.value })}>
                        <option disabled selected hidden>--Choose Sport--</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        name='city'
                        type="text"
                        placeholder='City'
                        onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Create an Account</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user })

export default connect(mapStateToProps, { registerProfile })(Register);