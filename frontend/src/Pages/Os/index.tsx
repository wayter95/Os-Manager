import React, { useState } from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import Modal from '../../Components/Modal';

import './style.css';

const Os = () => {
    const [isVisible, setVisible] = useState(false);

    function handleSubmit(e: any) {
        e.preventDefault();

        setVisible(true)
    }
    return (
        <div id="page-os">
            <Header />
            <Sidebar />
            <div className="content">
                <div className="createOs">
                    <h1>Criar OS:</h1>
                    <form onSubmit={handleSubmit}>
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
            {
                isVisible ? (
                    <Modal >
                        <h1>Tem certesa que deseja criar este chamado ?</h1>
                        <p>Assunto: <span>Formatar PC</span></p>
                        <p>Equipamento: <span>Computador pessoal</span></p>
                        <p>Local: <span>Almoxarifado</span></p>
                        <p>Troca de equipamento: <span>Não</span></p>
                        <p>Descrião: <span>O computador esta travando muito!</span></p>
                        <div className="btns">
                            <button className="save" type="button">Salvar</button>
                            <button className="exit" onClick={() => setVisible(false)}>Cancelar</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    )
}

export default Os;