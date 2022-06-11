import React from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { Redirect } from '../Redirect'
import './style.css'

export const NavBar = () => {
    return (
        <section className='container--header'>
            <section className='container--menu'>
                <input type='checkbox' id='input--menu'/>

                <label for='input--menu'>
                    <AiOutlineMenu />
                </label>

                <ul className='menu'>
                    
                </ul>
            </section>
            
            <div className='container--search'>
                <input type="text" placeholder='Pesquisar modelo' />
                <button className='button--search'>
                    <AiOutlineSearch />
                </button>
            </div>

            <div className='container--shopCart'>
                <Redirect href="/Home/Carrinho" className="button--carrinho" text={<AiOutlineShoppingCart />}>  </Redirect> 
            </div>

        </section>
    );
}