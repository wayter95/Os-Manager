import React from 'react';

import './style.css';

const MainReport: React.FC = () => {
    return (
        <div id="component-mainreport">
            <h2>Relatorios de manuntenção</h2>
            <form action="">
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
        </div>
    )
}

export default MainReport;