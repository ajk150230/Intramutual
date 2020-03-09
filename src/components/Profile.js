import React, { Component } from 'react';
import DisplayProfileEvents from './DisplayProfileEvents'
import Events from './Events'
import Cloudinary from './Cloudinary'
import UploadPicture from './UploadPicture'
import { Redirect, Link } from "react-router-dom";
import axios from 'axios'
import { connect } from "react-redux";
import { loginUser, getSession, updateState, resetState } from "../redux/userReducer";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
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
            })

            .catch(err => { console.log(err) })
    }
    togglePop = (id) => {
        console.log('working')
        this.setState({
            open: !this.state.open,
            event_id: id
        })
    }
    render() {
        console.log(this.props.user)
        if (!this.props.user.users_id) {
            return <Redirect to='/' />
        }
        console.log(this.props.user)
        return (
            <div className='profilecard'>
                <div className='usercard'>
                    <div id='me'>
                        Profile
                        <h1>{this.props.user.firstname} {this.props.user.lastname}</h1>
                        <h1>Works at: {this.props.user.company}</h1>
                        <h1>Favorite Sport: {this.props.user.sport}</h1>
                        <h1>City: {this.props.user.city}</h1>
                        <button id='button2' onClick={this.handleClick}>Logout</button>
                    </div>
                    <div id='me2'>
                        <section className='profilepicture' style={{ "backgroundImage": `url(${this.props.user.profile_img})`}}></section>
                        <button id='button4' onClick={this.togglePop}>Change Photo</button>
                    </div>
                </div>
                <Events />
                <div>
                    <DisplayProfileEvents />
                </div>
                {this.state.open ? <UploadPicture toggle={this.togglePop} /> : ''}
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({ user: reduxState.user })

export default connect(mapStateToProps, { loginUser, getSession, updateState, resetState })(Profile); 