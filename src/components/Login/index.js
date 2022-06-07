import React from "react";
import './style.css';

export const Login = (props) => {
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
                <button type="submit" className="button--user">Entrar</button>
            </form>
            <span className="make--register" onClick={() => props.setAction(!props.action)}>Efetuar cadastro</span>
        </section>       
    );
}