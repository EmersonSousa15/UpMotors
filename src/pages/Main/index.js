import { React, useState} from "react";
import './style.css';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Logo } from '../../components/Logo';
import { Cadastro } from "../../components/Cadastro";
import { Login } from "../../components/Login";



export const Main = (props) => {
    const [userAction, setUserAction] = useState(true);

    const renderDisplay = () => {
       if(userAction){
            return <Login action={userAction} setAction={setUserAction}/>
       }else{
            return <Cadastro action={userAction} setAction={setUserAction}/>
       }
    }
        
    return(
        <main className="main--container">
            <section id="conteiner--left">
                <Logo />
                <i className="next"><ArrowForwardIosIcon /></i>
            </section>
            <section id="container--right">
                        { renderDisplay() }
            </section>
        </main>
    );
}