import React from 'react';
import Logo from '../../assets/logo.png'
import './style.css'

export const NavBar = () => {
    return (
        <section className='navbar'>
            
            <section className='container--menu'>
                <img src={Logo} alt='logo' className='logo' />
                <ul className='menu'>
                    <li><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                </ul>
            </section>
            

        </section>
    );
}