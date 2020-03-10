import React, { Component } from 'react';
import ".././App.scss"
import { Link } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import torchlogo from '../img/torchlogo.png'


class Landing extends Component {
    render() {
        return (
            <section className='background'>
                <div className='card'>
                    <Login />
                    <img src={torchlogo}/>
                    <Link to='/register'><button>Register</button></Link>
                </div>
                <section className='landingpicture' id='slide1'></section>
                <section className='landingpicture' id='slide2'></section>
                <section className='landingpicture' id='slide3'></section>
            </section>
        );
    }
}

export default Landing;