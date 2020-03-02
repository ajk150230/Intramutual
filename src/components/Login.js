import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { loginUser } from "../redux/userReducer";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        console.log(this.props.user)
        this.props.loginUser(this.state.email, this.state.password)
    }
    render() {
        if (this.props.user.users_id) {
            return <Redirect to="/Profile" />
        }
        return (
            <div className='login'>
                <input
                    name='email'
                    onChange={this.handleChange}
                    placeholder='Email' />
                <input
                    name='password'
                    onChange={this.handleChange}
                    type="Password"
                    placeholder='Password' />
                <button onClick={this.handleClick}>Login</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user })

export default connect(mapStateToProps, { loginUser })(Login);