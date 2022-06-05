import { React, useState} from "react";
import Logo from '../../assets/icon-logo.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.css';
import { Cadastro } from "../Cadastro";
import { Login } from "../Login";

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
        <main>
            <section id="conteiner--left">
                    <div className="container--logo">
                        <img className="logo" src={Logo} alt="logo.png" />
                        <h1>UpMotors</h1>
                    </div>
                    <i className="next"><ArrowForwardIosIcon /></i>
            </section>
            <section id="container--right">
                    <section className="container--user--action">
                        { renderDisplay() }
                    </section>
            </section>
        </main>
    );
}