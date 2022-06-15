import React from "react";
import './style.css';

import { NavBar } from '../../components/NavBar';
import { Logo } from '../../components/Logo';
import { Carro } from "../../components/Carro";

export const Home = () => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <div className="container--logo--home">
                    <Logo />
                </div>
                <section className="container--cars">
                    <Carro />
                    <Carro />
                    <Carro />
                </section>
            </main>
        </>
    );
}