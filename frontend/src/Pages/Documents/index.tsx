import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import './style.css';

const Documents = () => {
    return (
        <div id="page-documents">
            <Header />
            <Sidebar />
            <div className="content">
                <div className="buttons">
                    <button>Retirada<br/>de equipamento</button>
                    <button>Relatorio<br/>de manutenção</button>
                    <button>Especificações<br/>de equipamento</button>
                    <button>Ordem<br/>de compra</button>
                </div>
                <div className="form">
                    <h1>Dados para documento:</h1>
                </div>
            </div>
        </div>
    )
}

export default Documents;