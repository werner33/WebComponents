import React , {useState} from 'react';
import { uploadFile } from 'react-s3';

import './UploadImageToS3WithReactS3.scss';

window.Buffer = window.Buffer || require("buffer").Buffer;


//TODO:
// create a add product route
// incorporate into a component
// Styling

const UploadImageToS3WithReactS3 = ({selectedFile, setSelectedFile}) => {

    // const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    // const handleUpload = async (file) => {

        // fetch awsCredentials
        // const response = await fetch('http://localhost:9000/awscredentials')
        // const awsCredentials = await response.json();

    //     uploadFile(file, awsCredentials)
    //         .then(data =>{

    //             // give indication that the upload was successful
    //             console.log(data);

    //             // save this url to the database (product table)

    //             // reset hook to null
    //         })
    //         .catch(err => {
    //             // give indication that the upload was unsuccessful
    //             console.error(err)
    //         })
    // }

    return (
        <div className="uploadImageToS3WithReactS3">
            <div className="uploadImageToS3WithReactS3__title">Select a Product Image</div>
            
            <input type="file" onChange={handleFileInput}/>
        </div>
    )
}

export default UploadImageToS3WithReactS3;