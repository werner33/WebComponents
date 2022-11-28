import React, {useEffect, useState} from "react";

import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

import { getCookie } from "./utils/cookieUtils";

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import SplitScreen from './layouts/splitScreen/SplitScreen';

import Navbar from './components/navbar/Navbar';
import EmailSubscriptionForm from './components/emailSubscriptionForm/EmailSupscriptionForm';
import ProductCards from './components/productCards/ProductCards';
import ArticleContainer from './components/articleContainer/ArticleContainer';
import StopwatchDisplay from "./components/stopwatchDisplay/StopwatchDisplay";
import LoginModal from "./components/loginModal/LoginModal";
import AccountList from "./components/accountList/AccountList";

//PAGES
import Cart from "./pages/Cart";

import './App.css';


function App() {

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(getCookie('accessToken') ? true : false);
  const [loginMessage, setLoginMessage] = useState('');

  useEffect(() => {

    setTimeout(function() {
      setLoginMessage('')
    }, 3000)

  }, [loginMessage])

  return (
    <Router>
      <div className="App">
        <Navbar setOpenLoginModal={setOpenLoginModal} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <LoginModal openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} setLoggedIn={setLoggedIn} setLoginMessage={setLoginMessage}/>
        {loginMessage && 
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            {loginMessage}
          </Alert>
        }
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/accounts" element={<AccountList />} /> 
          <Route path="/stopwatch" element={<StopwatchDisplay />} />
          <Route path="/" element={
            <SplitScreen>
              <ProductCards title="Awesome Products" />
              <ArticleContainer />
            </SplitScreen>
          } />
        </Routes>
        <EmailSubscriptionForm />
      </div>
    </Router>
  );
}

export default App;
