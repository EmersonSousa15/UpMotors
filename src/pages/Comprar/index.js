import React from 'react';
import './style.css';

import Honda from '../../assets/honda_civic.webp';
import HondaDrive from '../../assets/honda_civic_drive.jpg';
import HondaPerfil from  '../../assets/honda_civic_perfil.jpg';

import { NavBar } from '../../components/NavBar';
import { Redirect } from '../../components/Redirect';

export const Comprar = () => {

  return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <section className='container--purchase'>
                <img src={Honda} />
                <img src={HondaPerfil} />
                <img src={HondaDrive} />
            </section>
            <article className='informations--purchase'>
                <section className='container--text--car'>
                    <div className='text--car'>
                        <h1>Honda <span>Civic</span></h1>
                        <p>1.5 16V TURBO GASOLINA TOURING 4P CVT</p>
                    </div>
                </section>
                <section className='container--actions--car'>
                <p className='price'>R$ 100.000,00</p>
                    <div className='buttons--purshase'>
                        <button><Redirect href="/Home/Comprar/Carrinho" className="button--purshase" text="Adicionar ao carrinho"/></button>
                        <button><Redirect  href="/Home/Comprar/Pagamento" className="button--purshase" text="Comprar" /></button>
                    </div>
                </section>
            </article>
        </main>
    </>
  );
}

