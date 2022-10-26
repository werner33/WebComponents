import React from 'react';

import './SplitScreen.scss';

const SplitScreen = (props) => {
  return (
    <div className="splitScreen">
        {props.children}
    </div>
  )
}

export default SplitScreen