import React,{useState} from 'react';
import Modal from '../Modal';

import './style.css';

const Specifications: React.FC = () => {
    const [isVisible, setVisible] = useState(false);
    function handleSubmit(e:any){
        e.preventDefault();

        setVisible(true);
    }
    return (
        <div id="component-specifications">
            <h2>Especificações de equipamento</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Setor:*</label>
                <input type="text" />

                <label>Equipamento:*</label>
                <input type="text" />

                <label>Motivo:*</label>
                <input type="text" placeholder="Para qual motivo o equipamento ira servir" />
                
                <label>Urgencia:*</label>
                <select name="" id="">
                    <option value="low">Baixa</option>
                    <option value="mean">Media</option>
                    <option value="high">Alta</option>
                </select>

                <label>Descrição:*</label>
                <textarea placeholder="Ex: Um computador da 4° geração com 8gb de RAM, 1tb de hdd..." />

                <button type="submit">Salvar</button>
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

export default Specifications;