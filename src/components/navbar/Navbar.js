import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import MenuItem from '../menuItem/MenuItem';
import MobileMenuItem from '../mobileMenuItem/MobileMenuItem';

import SubMenu from '../subMenu/SubMenu';

import './Navbar.scss';


const Navbar = ({setOpenLoginModal}) => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
        <div className="navbar__items">
            <Link to="/">
              <div className="navbar__logo">
                <img src="/eduk_logo.png" alt="eduk logo of building and statue of liberty" />
              </div>
            </Link>

            <div className="navbar__left">
            <div 
              className="navbar__hamburger"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {!toggleMenu && <MenuIcon  
                sx={{
                  width: 50,
                  height: 50
                }} 
              />}
              {toggleMenu && <CloseIcon  
                sx={{
                  width: 50,
                  height: 50
                }} 
              />}
            </div>
            <div className="navbar__mobileMenu"  style={{'right' : toggleMenu ? '0px' : '-181px'}}>
              <MobileMenuItem text="Resources" path="resources">
                <div className="submenuItem">High School</div>
                <div className="submenuItem">College</div>
                <div className="submenuItem">Continued Learning</div>
                <div className="submenuItem">Add Resource</div>
              </MobileMenuItem>
              <MenuItem text="Stopwatch" path="stopwatch" />
              <MenuItem text="About" path="about"/>
              <MenuItem text="Cart" path="cart"/>
              <MenuItem text="Log In"/>
            </div>
            <ul className="navbar__itemLinks">
                <MenuItem text="Resources" path="resources">
                    <SubMenu />
                </MenuItem>
                <MenuItem text="Stopwatch" path="stopwatch" />
                <MenuItem text="About" path="about" />
                <MenuItem text="Cart" path="cart" />
                <Button variant="contained" onClick={() => setOpenLoginModal(true)}>Log In</Button>

            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar