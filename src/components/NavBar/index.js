import React from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { Redirect } from '../Redirect'
import './style.css'

import { Menu } from '../Menu';

export const NavBar = () => {

    let styleMenu = {
        "margin-left": "1rem"
    }

    let styleCar = {
        "margin-right": "2rem"
    }

    return (
        <section className='container--header'>
            <section className='container--menu'>
                <input type='checkbox' id='input--menu'/>

                <label for='input--menu'>
                    <AiOutlineMenu style={styleMenu}/>
                </label>

                <Menu />

            </section>
            
            <div className='container--search'>
                <input type="text" placeholder='Pesquisar modelo' />
                <button className='button--search'>
                    <AiOutlineSearch />
                </button>
            </div>

            <div className='container--shopCart'>
                <Redirect href="/Home/Carrinho" className="button--carrinho" text={<AiOutlineShoppingCart style={styleCar} />}>  </Redirect> 
            </div>

        </section>
    );
}