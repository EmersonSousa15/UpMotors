import React from "react";
import './style.css';

import { Redirect } from "../Redirect";

export const Login = (props) => {

    const login = (event) => {
        event.preventDefault();
    }

    return(
        <section className="container--user">
            <h2>Entrar</h2>
            <form>
                <div className="user--box">
                    <input type="email" required/>
                    <label className="label--input">E-mail</label>
                </div>
                <div className="user--box">
                    <input type="password" required/>
                    <label className="label--input">Senha</label>
                </div>
                <Redirect href="/Home" className="button--user" text="Entrar" onSubmit={() => login()}/>
            </form>
            <span className="make--register" onClick={() => props.setAction(!props.action)}>Efetuar cadastro</span>
        </section>       
    );
}