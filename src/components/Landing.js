import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Register from './Register'
import Login from './Login'

class Landing extends Component {
    render() {
        return (
            <div>
                <Login/>
                <Link to='/register'><button>Sign Up</button></Link>
            </div>
        );
    }
}

export default Landing;