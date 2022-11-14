import React, {useState} from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './MobileMenuItem.scss';

const MobileMenuItem = ({text, children}) => {
    
    const [displaySubMenu, setDisplaySubMenu] = useState(false);

    return (
        <li 
            className="mobileMenuItem"
            onClick={() => setDisplaySubMenu(!displaySubMenu)}
        >
            {text} {children &&  <ArrowDropDownIcon className="downArrowIcon" size="small"/>}
            <div className={displaySubMenu ? "mobileSubmenu mobileSubmenu--active" : "mobileSubmenu"}>
                {children}
            </div>
        </li>
      )
}

export default MobileMenuItem