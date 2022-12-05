import React , {useState} from 'react';
import { uploadFile } from 'react-s3';

window.Buffer = window.Buffer || require("buffer").Buffer;


//TODO:
// Styling
// incorporate into a component

// const S3_BUCKET ='YOUR_BUCKET_NAME';
// const REGION ='YOUR_REGION_NAME';
// const ACCESS_KEY ='YOUR_ACCESS_KEY';
// const SECRET_ACCESS_KEY ='YOUR_SECRET_ACCESS_KEY';


// create a route to serve this from the backend 
const config = {
    bucketName: 'winterecommerce2022',
    region: 'us-east-1',
    accessKeyId: 'AKIA5TTCWKP6NNRJE2GK',
    secretAccessKey: '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',
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data =>{

                // give indication that the upload was successful
                console.log(data);

                // save this url to the database (product table)

                // reset hook to null
            })
            .catch(err => {
                // give indication that the upload was unsuccessful
                console.error(err)
            })
    }

    return <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default UploadImageToS3WithReactS3;