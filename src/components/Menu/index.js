import React from 'react';
import './style.css';

import { Redirect } from '../Redirect';

export const Menu = () => {
  return (
    <>
      <ul className='menu'>
        <li><Redirect href='/Home/Reservar' className='item' text="Reservar"/></li>
      </ul>
    </>
  );
}
