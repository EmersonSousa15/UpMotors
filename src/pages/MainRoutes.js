import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Honda from '../assets/honda_civic.webp'

import { Main }  from './Main';
import { Home } from './Home';
import { Carrinho } from './Carrinho';
import { Comprar } from './Comprar';

export const MainRoutes = () => {

    let infor = {
        img: <Honda />,
        modelo: "Honda Civic",
        preco: "R$ 100.000,00"
    }


    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Home/Carrinho" element={<Carrinho />} />
            <Route path="/Home/Comprar" element={<Comprar />}/>
            <Route path="/Home/Comprar/Carrinho" element={<Carrinho car={infor} />} />
        </Routes>
    )
}