import React from 'react';
import { Redirect } from '../Redirect'
import "../Login/style.css";
import "./style.css"

export const Cadastro = (props) => {

    const register = (event) => {
        event.preventDefault();
        props.setAction(!props.action);
    }

    return(
        <section className="container--user">
            <h2>Cadastrar</h2>
            <form>
                <div className="user--box">
                    <input type="text" required/>
                    <label className="label--input">Nome</label>
                </div>
                <div className="user--box">
                    <input type="number" required/>
                    <label className="label--input">Idade</label>
                </div>
                <div className="user--box">
                    <input type="text" required/>
                    <label className="label--input">CPF</label>
                </div>
                <div className="user--box">
                    <input type="email" required/>
                    <label className="label--input">E-mail</label>
                </div>
                <div className="user--box">
                    <input type="password" required/>
                    <label className="label--input">Senha</label>
                </div>
                
                <button type="submit" className="button--user" onSubmit={() => register()}>Cadastrar</button>
            </form>
        </section>
    )
}