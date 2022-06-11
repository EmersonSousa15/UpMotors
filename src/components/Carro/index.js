import React from 'react';
import './style.css';

import Honda from '../../assets/honda_civic.webp';
import { Redirect } from '../Redirect';

export const Carro = (props) => {

  const rederCar = () => {
  if(props.infor){
    return (<div className='container--car heigth'>
            <img src={Honda}/>
            <div className='informations--car'>
                <h1>{props.infor.modelo}</h1>
                <span>{props.infor.preco}</span>
            </div>
    </div>)
  }else{
    return (<div className='container--car'>
            <img src={Honda}/>
            <div className='informations--car'>
                <h1>Honda Civic</h1>
                <span>R$ 100.000,00</span>
            </div>
            <button><Redirect href="/Home/Comprar" className="button--buy" text="Comprar"/></button>
    </div>)
  }}

  return (
      <>
        {
          rederCar()
        }
      </>
  );
}