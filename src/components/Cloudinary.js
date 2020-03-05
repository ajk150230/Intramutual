import React, {useState} from 'react';
require("dotenv").config()

function Cloudinary() {

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
    console.log(process.env)
    return (
        <div>
            <h1>Upload Image</h1>
            <input type="file"
            name="file"
            onChange={uploadImage}/>
            {loading ? (
                <h1>loading...</h1>
            ):
            (
                <img src={image} style={{width: '100px'}}/> 
            )
            }
        </div>
    );
}

export default Cloudinary;