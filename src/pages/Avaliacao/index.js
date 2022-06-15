import React from 'react';
import './style.css';

import { AiOutlineStar } from 'react-icons/ai';

import { Redirect } from '../../components/Redirect';

export const Avaliacao = () => {
  return (
    <>
        <header className='header--feedback'>
            <h1 className='title--feedback'>Avaliação do produto</h1>
        </header>
        <main>  
            <section className='container--feedback'>
                <h2>Avaliação</h2>
                <div className='container--stars'>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
                <textarea cols="45" rows="10" placeholder="Comentar"></textarea>
                <div className='buttons--feedback'>
                        <button><Redirect href="/Home" className="button--purshase" text="Cancelar"/></button>
                        <button><Redirect  href="/Home" className="button--purshase" text="Enviar" /></button>
                </div>
            </section>
        </main>
    </>
  );
}

