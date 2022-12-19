import React, {useState} from 'react'
import { uploadFile } from 'react-s3';

import UploadImageToS3WithReactS3 from '../uploadImageToS3WithReactS3/UploadImageToS3WithReactS3';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '../button/Button';

import './AddProduct.scss';

window.Buffer = window.Buffer || require("buffer").Buffer;

const AddProduct = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [formMessage, setFormMessage] = useState('');

    const submitProduct = async () => {

        // validate form data

        // set loading to true
        setLoading(true);
        setFormMessage('');
    
        // fetch awsCredentials
        const response = await fetch('http://localhost:9000/awscredentials')
        const awsCredentials = await response.json();

        // save image to aws
        uploadFile(imageURL, awsCredentials)
        .then(data =>{
            // set get new image url from data
            let awsImageURL = data.location;

            // prepare reqParams
            const reqOptions = {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title, 
                    price, 
                    awsImageURL
                })
            }

            // save product ingo to our own db
            fetch('http://localhost:9000/products/new', reqOptions)
                .then(response => response.json())
                .then(data => {

                    if(data.status === 'error'){
                        throw(data.message)
                    } else {
                        //success
                        // tell user product was created
                        setFormMessage('Product Was Created')
                        // set all hooks to empty strings
                        setTitle('');
                        setPrice('');
                        setImageURL('');

                        // set loading to false
                        setLoading(false);
                    }
                }).catch(error => {
                    //error
                        // tell user prodict was not saved
                        setFormMessage(error)
                        // set loading to false 
                        setLoading(false);
                })
        }).catch(error => {
            // give indication that the upload was unsuccessful
            setFormMessage(error)

            //set loading to false
            setLoading(false);
        })
    }

    return (
    <div className="addProduct">
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { my: 1, width: '80ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography className="loginModal__title" id="modal-modal-title" variant="h6" component="h2">
                Add Product
            </Typography>
            {formMessage && 
                <div className="form__errorText" style={{"color" : "red"}}>
                    {formMessage}
                </div>
            }
            <TextField 
                id="outlined-basic" 
                label="Title" 
                variant="outlined" 
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <TextField 
                id="outlined-basic" 
                label="Price" 
                type="price" 
                variant="outlined"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            <UploadImageToS3WithReactS3 selectedFile={imageURL} setSelectedFile={setImageURL} />
            <Button onClick={submitProduct} loading={loading} text="Add Product" />
        </Box>
    </div>
  )
}

export default AddProduct