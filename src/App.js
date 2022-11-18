import React, {useState} from "react";

import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

import SplitScreen from './layouts/splitScreen/SplitScreen';

import Navbar from './components/navbar/Navbar';
import EmailSubscriptionForm from './components/emailSubscriptionForm/EmailSupscriptionForm';
import ProductCards from './components/productCards/ProductCards';
import ArticleContainer from './components/articleContainer/ArticleContainer';
import StopwatchDisplay from "./components/stopwatchDisplay/StopwatchDisplay";
import LoginModal from "./components/loginModal/LoginModal";

//PAGES

import Cart from "./pages/Cart";

import './App.css';


function App() {

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false);

  return (
    <Router>
      <div className="App">
        <Navbar setOpenLoginModal={setOpenLoginModal} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <LoginModal openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path="/cart" element={<Cart />} />
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
