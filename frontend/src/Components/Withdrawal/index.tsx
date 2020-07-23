import React,{useState} from 'react';

import './style.css';
import Modal from '../Modal';

const Withdrawal: React.FC = () => {
    const [isVisible, setVisible] = useState(false);
    function handleSubmit(e:any){
        e.preventDefault();

        setVisible(true);
    }
    return (
        <div id="component-withdrawal">
            <h2>Retirada de equipamento</h2>
            <form onSubmit={handleSubmit}>
                <label className="sector">
                    <p>Setor: *</p>
                    <input type="text" />
                </label>
                <label className="responsible">
                    <p>Responsavel: *</p>
                    <input type="text" />
                </label>
                <label className="called">
                    <p>Chamado: *</p>
                    <select name="" id="">
                        <option value="001">001 Formatar PC</option>
                        <option value="002">002 PC Não Liga</option>
                    </select>
                </label>
                <label className="motive">
                    <p>Motivo: *</p>
                    <input type="text" />
                </label>
                <label className="description">
                    <p>Descrição: *</p>
                    <textarea placeholder="" />
                </label>
                <button type="submit">Salvar </button>
            </form>
            {
                isVisible?(
                    <Modal>
                        <h1>Deseja gerar este documento?</h1>
                          <div className="btns">
                            <button className="save" type="button">Salvar</button>
                            <button className="exit" onClick={() => setVisible(false)}>Cancelar</button>
                        </div>
                    </Modal>
                ):null
            }
        </div>
    )
}

export default Withdrawal;