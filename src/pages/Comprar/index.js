import React from 'react';
import './style.css';

import Honda from '../../assets/honda_civic.webp';

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
                <article className='informations--purchase'>
                    <div className='text--car'>
                        <h1>Honda Civic</h1>
                        <p>&nbsp;&nbsp;&nbsp;O Honda Civic é um automóvel produzido pela Honda desde 1973. 
                            Atualmente encontra-se em sua décima primeira geração.
                            Foi eleito duas vezes o Carro do Ano pela revista Autoesporte, em 2007 e em 2017.
                        </p>
                    </div>
                    <span>R$ 100.000,00</span>
                    <div className='buttons--purshase'>
                        <button><Redirect href="/Home/Comprar/Carrinho" className="button--purshase" text="Adicionar ao carrinho"/></button>
                        <button><Redirect  href="/Home/Pagamento" className="button--purshase" text="Comprar" /></button>
                    </div>
                </article>
            </section>
        </main>
    </>
  );
}

