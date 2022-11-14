import React from 'react';

import LoopIcon from '@mui/icons-material/Loop';

import './Button.scss';

const Button = ({text, loading, onClick}) => {
    let itemInCart=false;
    let id=3;

  return (
    <div 
        className="button"
        onClick={onClick}
        id={id}
    >
        {!itemInCart && !loading && text}
        {!itemInCart && loading && <LoopIcon className="loader" fontSize='small' />}
        {itemInCart && 'View Cart'}
    </div> 
  )
}

export default Button