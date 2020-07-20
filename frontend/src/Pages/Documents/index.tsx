import React,{useState} from 'react';

import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import Withdrawal from '../../Components/Withdrawal';
import MainReport from '../../Components/MainReport';
import Specifications from '../../Components/Specifications';

import './style.css';

const Documents = () => {
    const [state,setState] = useState('w');
    return (
        <div id="page-documents">
            <Header />
            <Sidebar />
            <div className="content">
                <div className="buttons">
                    <button onClick={() => setState('w')}>Retirada<br/>de equipamento</button>
                    <button onClick={() => setState('m')}>Relatorio<br/>de manutenção</button>
                    <button onClick={() => setState('s')}>Especificações<br/>de equipamento</button>
                    <button disabled onClick={() => setState('o')}>Ordem<br/>de compra</button>
                </div>
                <div className="form">
                    <h1>Dados para documento:</h1>
                   {
                       state === 'w' &&
                       <Withdrawal />
                   }
                    {
                       state === 'm' &&
                       <MainReport />
                   }
                    {
                       state === 's' &&
                       <Specifications />
                   }
                </div>
            </div>
        </div>
    )
}

export default Documents;