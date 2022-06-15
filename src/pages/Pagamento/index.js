import React from 'react';
import { Redirect } from '../../components/Redirect';
import './style.css';

export const Pagamento = () => {
  return (
    <>
        <header className='header--payment'>
            <h1 className='title--payment'>Efetuar Pagamento</h1>
        </header>
        <main className='main--payment'>
        <section className='user--infor'>
            <div className='method--payment'>
                <input type="radio" id='checked--radio' checked/>
                <label for="checked--radio">
                    Cartão de crédito
                </label>
            </div>
                <div className='user--box'>
                    <input type='text' required />
                    <label className='label--input'>Número do cartão</label>
                </div>
                <div className='user--box'>
                    <input type='text' required />
                    <label className='label--input'>Nome do titular</label>
                </div>
                <div className='user--box'>
                    <input type='date' required placeholder=" "/>
                    <label className='label--input'>Data de validade</label>
                </div>
                <div className='user--box'>
                    <input type='number' required />
                    <label className='label--input'>CVV</label>
                </div>

                <Redirect href="/Home/Comprar/Pagamento/Avaliacao" className='button--pagar' text="Pagar" />
            </section>
        </main>
    </>
  );
}