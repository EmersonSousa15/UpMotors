import React from 'react';
import { Redirect } from '../../components/Redirect'
import "./style.css";

export const Cadastro = (props) => {

    const register = (event) => {
        event.preventDefault()
        props.setAction(!props.action)
    }

    return(
        <>
            <h2>Cadastrar</h2>
            <form>
                <div className="user--box">
                    <input type="email" required/>
                    <label className="user--email">E-mail</label>
                </div>
                <div className="user--box">
                    <input type="password" required/>
                    <label className="user--password">Senha</label>
                </div>
                <button type="submit" className="button--login" onSubmit={() => register()}>Cadastrar</button>
            </form>
        </>
    )
}