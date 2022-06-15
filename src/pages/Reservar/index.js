import React from 'react';
import './style.css';

import { TbFlag3 } from 'react-icons/tb';

import { Redirect } from '../../components/Redirect';
import { NavBar } from '../../components/NavBar';

export const Reservar = () => {
  return (
      <>
        <header>
            <NavBar />
        </header>
        <main>
        <section className='container--products'>
          <div className='container--icon'>
            <TbFlag3 color='#000' font-size="5rem"/>
          </div>
          <h1>Sem reservar no momento</h1>
          <div className='container--button--home'>
            <button><Redirect  href="/Home" className="button--home" text="Home" /></button>
          </div>
        </section>  
        </main>
      </>
  );
}

