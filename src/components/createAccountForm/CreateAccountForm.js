import React, {useState} from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Button from '../button/Button';

import './CreateAccountForm.scss';

const CreateAccountForm = ({setOpenLoginModal, setLoggedIn}) => {


    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [formMessage, setFormMessage] = useState('');
  
 
     // on unfocus validate username
     const validateUsername = () => {
        if(username.length <  4){
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    }

    const validateEmail = () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailError(false); 
        } else {
            setEmailError(true);
        }
    }


    const createUser = () => {

        const reqOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, 
                email, 
                password
            })
        }

        fetch('http://localhost:9000/users', reqOptions)
        .then(response => response.json())
        .then(data => {
            if(data.status === 'error'){
                // set form info to show message
                if(data.message.includes('users_username_key')){
                    setFormMessage('Please choose another username. This one is already taken.');
                } else if (data.message.includes('users_email_key')){
                    setFormMessage('Please choose another email. This one is already taken.');
                }
               
            } else {
                setEmail('');
                setUsername('');
                setPassword('');
                setOpenLoginModal(false);
    
                // show toast that user was successfully created 
    
                localStorage.setItem('accessToken', data.accessToken);
                setLoggedIn(true);
            }
        }).catch(error => {
            // handle error
            console.error(error);
        })
    }

  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { my: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <Typography className="loginModal__title" id="modal-modal-title" variant="h6" component="h2">
            Please Create an Account
        </Typography>
        {formMessage && 
            <div className="form__errorText" style={{"color" : "red"}}>
                {formMessage}
            </div>
        }
        <TextField 
            id="outlined-basic" 
            label="Username" 
            variant="outlined" 
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onBlur={validateUsername}
            error={usernameError}
            helperText={usernameError && "Username must be at least 4 characters long."}
        />
        <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onBlur={validateEmail}
            error={emailError}
            helperText={emailError &&  "Please enter a valid email."}
        />
        <TextField 
            id="outlined-basic" 
            label="Password" 
            type="password" 
            variant="outlined"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <Button onClick={createUser} text="Submit" />
    </Box>
  )
}

export default CreateAccountForm