import React, {useState} from 'react';
import { connect } from "react-redux";
import { editPicture } from "../redux/userReducer"

require("dotenv").config()

function Cloudinary(props) {

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const uploadImage = async e => {
        // const {CLOUD_NAME} = process.env
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'IntraMutual')
        setLoading(true)
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }
    function handleClick(){
        props.editPicture(image)
        console.log(image)
    }
    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ):
            (
                <img src={image} style={{width: '100px'}}/> 
            )
            }
            <input type="file"
            name="file"
            onChange={uploadImage}/>
            <button id='button2'onClick={handleClick}>Upload</button>
        </div>
    );
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user})

export default connect(mapStateToProps, { editPicture })(Cloudinary); 