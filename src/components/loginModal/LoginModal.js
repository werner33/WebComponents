import React from 'react';


import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';


import CreateAccountForm from "../createAccountForm/CreateAccountForm";
import LoginAccountForm from "../loginAccountForm/LoginAccountForm";


import './LoginModal.scss';

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
           <>{children}</>
        )}
      </div>
    );
  }


function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const LoginModal = ({openLoginModal, setOpenLoginModal, setLoggedIn, ...props}) => {

    const [value, setValue] = React.useState(0);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4, 
        width: '30ch'
      };

    const handleClose = () => {
        setOpenLoginModal(false);
    }

    const handleChange = (e) => {
        setValue(Number(e.target.id[e.target.id.length-1]));
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
                {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
                    <Tabs value={value} onChange={handleChange} aria-label="Log in and create account tabs">
                        <Tab label="Log In"  {...a11yProps(0)} />
                        <Tab label="Create Account" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <LoginAccountForm setOpenLoginModal={setOpenLoginModal} setLoggedIn={setLoggedIn}/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <CreateAccountForm setOpenLoginModal={setOpenLoginModal} setLoggedIn={setLoggedIn} />
                    </TabPanel>
                {/* </Box> */}
            </Stack>
        </Modal>
     
    )
}

export default LoginModal