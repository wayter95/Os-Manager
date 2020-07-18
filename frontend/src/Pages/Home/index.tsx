import React from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import './style.css';

    

const Home = () => {
    const history = useHistory();
return(
    <div id="page-home">
        <Header/> 
        <Sidebar/>
        <div className="content">
            <div className="lastOs">
            <h1>Ultimas OS <button onClick={() => history.push('/os')}> Criar OS</button> </h1>
            <ul>ASSUNTO DATA OS PRIORIDADE ANDAMENTO</ul>
            <li>Formatacao 22/03/199 <strong>alta</strong> concluido</li>
            </div>
            

            <div className="notifications">
            <h1>Notificações</h1>
            </div>
            
        </div>
    </div>
)
}
export default Home;