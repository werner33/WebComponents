import React, {useState} from 'react'

import { Link } from 'react-router-dom';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './MenuItem.scss';

const MenuItem = ({text, path, ...props}) => {

  const [displaySubMenu, setDisplaySubMenu] = useState(false);

  return (
    
      <li 
          className="menuItem"
          onMouseEnter={() => setDisplaySubMenu(true)}
          onMouseLeave={() => setDisplaySubMenu(false)}
      >
        <Link to={`/${path}`}>
          {text} {props.children &&  <ArrowDropDownIcon className="downArrowIcon" size="small"/>}
        </Link>
          {displaySubMenu && props.children}
      </li>
  )
}

export default MenuItem