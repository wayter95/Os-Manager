import React from 'react';

import './style.css';

const Specifications: React.FC = () => {
    return (
        <div id="component-specifications">
            <h2>Especificações de equipamento</h2>
            <form action="">
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

                <button>Salvar</button>
            </form>
        </div>
    )
}

export default Specifications;