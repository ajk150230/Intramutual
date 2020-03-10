import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <>
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
                <img
                    id='hamburger'
                    onClick={() => this.setState({ open: !this.state.open })}
                    src='https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png'
                />
            </div>
            <menu className={this.state.open === true ? "menu-open" : ""}>
                <Link to='/profile' style={{ textDecoration: 'none', color: 'white' }}>
                    <h1>
                    Profile
                    </h1>
                </Link>
                <Link to='/discover' style={{ textDecoration: 'none', color: 'white' }}>
                <h1>
                    Discover
                    </h1>
                </Link>
                <Link to='/rosters' style={{ textDecoration: 'none', color: 'white' }}>
                <h1>
                    MyTeam
                    </h1>
                </Link>
            </menu>
            </>
        );
    }
}

export default Header;