import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import './style.css';

const Os = () => {
    return (
        <div id="page-os">
            <Header />
            <Sidebar />
            <div className="content">
                <div className="createOs">
                    <h1>Criar OS:</h1>
                    <form action="">
                        <label className="subject">
                            <p>Assunto: *</p>
                            <input type="text" />
                        </label>

                        <label className="description">
                            <p>Descrição: *</p>
                            <textarea />
                        </label>

                        <label className="priority">
                            <p>Priodidade:</p>
                            <select name="" id="">
                                <option value="">Baixa</option>
                                <option value="">Normal</option>
                                <option value="">Alta</option>
                            </select>
                        </label>

                        <label className="equipaments">
                            <p>Equipamento: *</p>
                            <input type="text" />
                        </label>

                        <label className="local">
                            <p>Local: *</p>
                            <input type="text" />
                        </label>

                        <label className="check">
                            <input type="checkbox" />
                        Troca de Equipamento
                        </label>

                        <button type="submit">Salvar</button>

                    </form>
                </div>
                <div className="allOs">
                    <h1>Todas as minnhas OS:</h1>
                    <header>
                        <label>Assunto:</label>
                        <label>Data OS:</label>
                        <label>Prioridade:</label>
                        <label>Andamento:</label>
                    </header>
                    <ul>
                        <li>
                        <label>Formatar meu pc</label>
                        <label>08/06/2020</label>
                        <span>Alta</span>
                        <p>Iniciada</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Os;