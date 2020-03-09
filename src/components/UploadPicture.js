import React, { Component } from 'react';
import Cloudinary from './Cloudinary'

class UploadPicture extends Component {
    render() {
        return (
            <div className="modal-background" >
                <section className="modal" id='modal-picture'>
                    <Cloudinary />
                <button id='button3'onClick={this.props.toggle}>Cancel</button>
                </section>
            </div>
        );
    }
}

export default UploadPicture;