import React from "react";
import './style.css';

export const Login = (props) => {
    return(
        <>
            <h2>Entrar</h2>
            <form>
                <div className="user--box">
                    <input type="email" required/>
                    <label className="user--email">E-mail</label>
                </div>
                <div className="user--box">
                    <input type="password" required/>
                    <label className="user--password">Senha</label>
                </div>
                <button type="submit" className="button--login">Entrar</button>
            </form>
            <span className="make--register" onClick={() => props.setAction(!props.action)}>Efetuar cadastro</span>
        </>       
    );
}