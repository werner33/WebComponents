import React, {useState} from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Button from '../button/Button';

const LoginAccountForm = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');

    const validateEmail = () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailError(false); 
        } else {
            setEmailError(true);
        }
    }

    const logInUser = () => {
    // handle login
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
                Please Log In
            </Typography>
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
            <Button onClick={logInUser} text="Log In" />
        </Box>
  )
}

export default LoginAccountForm