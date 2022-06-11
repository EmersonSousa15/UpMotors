import React from 'react';
import './style.css';

import IconLogo from '../../assets/icon-logo.png';

export const Logo = () => {
  return (
  <>
     <div className="container--logo">
            <img className="logo" src={IconLogo} alt="logo.png" />
            <h1>UpMotors</h1>
     </div>
                    
  </>);
}

