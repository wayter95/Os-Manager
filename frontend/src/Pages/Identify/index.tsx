import React,{useState} from "react";
import {useHistory} from "react-router-dom";

import "./style.css";

const Identify = () => {
    const history = useHistory();
    const [email,setEmail] = useState();

    return(
        <div id="page-identify">
            <header>
                <h1 onClick={() => history.push('/')}>OS Manager</h1>
            </header>
            <div className="content">
               <form action="">
                   <label htmlFor="input">Digite seu email:</label>
                   <input type="email"
                   placeholder="email@email.com"
                   />
                   <button type="submit">Enviar</button>
                   <a href="/">Volar a pagina de login!</a>
               </form>
            </div>
        </div>
    )
}

export default Identify;