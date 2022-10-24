import React from 'react';

import MenuItem from '../menuItem/MenuItem';
import SubMenu from '../subMenu/SubMenu';

import './Navbar.scss';


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__items">
            <div className="navbar__logo">
            <img src="/eduk_logo.png" alt="eduk logo of building and statue of liberty" />
            </div>

            <div className="navbar__left">
            <ul className="navbar__itemLinks">
                <MenuItem text="Resources">
                    <SubMenu />
                </MenuItem>
                <MenuItem text="About" />
                <MenuItem text="Mentors" />
                <MenuItem text="Log In" />
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar