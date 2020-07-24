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
        <h1>Chamado N° 01</h1>
        <div className="os">
          <label className="subject">
            <p>Assunto:</p>
            <input type="text" placeholder="teste" disabled />
          </label>
          <label className="user">
            <p>Usuario:</p>
            <input type="text" placeholder="teste" disabled />
          </label>
          <label className="local">
            <p>Local:</p>
            <input type="text" placeholder="teste" disabled />
          </label>
          <label className="equipament">
            <p>Equipamento:</p>
            <input type="text" placeholder="teste" disabled />
          </label>
          <label className="description">
            <p>Descrição: </p>
            <textarea placeholder="teste" disabled />
          </label>
          <label className="urgency">
            <p>Urgencia:</p>
            <input type="text" placeholder="teste" disabled />
          </label>
          <label className="shiftEquipament">
            <p>Troca de equipamento:</p>
            <input type="text" placeholder="teste" disabled />
          </label>
        </div>

        <form >
        <h1>Gerenciar chamado: </h1>
          <label className="evaluation">
            <p>Avaliação:</p>
            <textarea />
          </label>
          <label className="progress">
            <p>Andamento:</p>
            <select name="" id="">
              <option value="init">Iniciada</option>
              <option value="progress">Andamento</option>
              <option value="done">Concluida</option>
            </select>
          </label>
          <label className="check">
            <input type="checkbox" />
            <p>Troca de equipamento:</p>
          </label>
          <div className="btns">
            <button className="save" type="submit">Salvar</button>
            <button className="cancel" type="button">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Info;
