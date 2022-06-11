import React from 'react';
import './style.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { NavBar } from '../../components/NavBar';
import { Carro } from '../../components/Carro';

export const Carrinho = (props) => {
  
  const renderCar = () => {
    if(props.car){
      return <Carro infor={props.car}/>
    }else{
      return (
        <section className='container--products'>
          <div className='container--icon'>
            <AiOutlineShoppingCart color='#000' font-size="5rem"/>
          </div>
          <h1>Seu carrinho está vazio</h1>
        </section>
      );
    }
  }

  return (
  <>
    <header className='header--carrinho'>
      <NavBar />
    </header>
    <main>
      {renderCar()}
    </main>
  </>
  );
}

