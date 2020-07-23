import React from "react";

import "./style.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Info = () => {
  return (
    <div id="page-info">
      <Header />
      <Sidebar />
      <div className="content">
        <h1>Acompanhe o atendimento</h1>
        <form>
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
    </div>
  );
};

export default Info;
