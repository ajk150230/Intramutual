import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='header'>
                <div className='logo'>
                    IntraMutual
                </div>
                <section className='nav-bar' id='nav-bar-btn'>
                    <Link to='/profile' style={{ textDecoration: 'none', color: 'white' }}>
                        <p>Profile</p>
                    </Link>
                    <Link to='/discover' style={{ textDecoration: 'none', color: 'white' }}>
                        <p>Discover</p>
                    </Link>
                    <Link to='/rosters' style={{ textDecoration: 'none', color: 'white' }}>
                        <p>Rosters</p>
                    </Link>
                </section>
            </div>
        );
    }
}

export default Header;