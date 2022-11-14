import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import './LoginModal.scss';

const LoginModal = ({openLoginModal, setOpenLoginModal}) => {

    const handleClose = () => {
        setOpenLoginModal(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4, 
        width: '30ch'

      };

    return (
    
        <Modal
            className="loginModal"
            open={openLoginModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
             <Stack
                component="form"
                sx={style}
                spacing={2}
                noValidate
                autoComplete="off"
            >
                <Typography className="loginModal__title" id="modal-modal-title" variant="h6" component="h2">
                    Please Create an Account
                </Typography>
                <TextField id="outlined-basic" label="First Name" variant="outlined" width="100"/>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                <TextField id="outlined-basic" label="Username" variant="outlined" required/>
                <TextField id="outlined-basic" label="Email" variant="outlined" required/>
                <TextField id="outlined-basic" label="Password" variant="outlined" required/>
                
            </Stack>
        </Modal>
     
    )
}

export default LoginModal