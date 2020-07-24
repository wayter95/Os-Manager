import React from 'react';
import {useHistory} from "react-router-dom";

import "./style.css";

const Recovery = () => {
    const history = useHistory();

    return(
        <div>
               <div id="page-recovery">
            <header>
                <h1 onClick={() => history.push('/')}>OS Manager</h1>
            </header>
            <div className="content">
               <form action="">
                   <label htmlFor="input">Nova senha:</label>
                   <input type="password" placeholder=""/>
                   <label htmlFor="input">Repita a senha:</label>
                   <input type="password" placeholder=""/>
                   <button type="submit">Salvar</button>
               </form>
            </div>
        </div>
        </div>
    )
}

export default Recovery;