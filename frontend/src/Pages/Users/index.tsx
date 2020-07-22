import React, { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import Modal from "../../Components/Modal";

import "./style.css";

const Users = () => {
  const [isVisible, setVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div id="page-users">
      <Header />
      <Sidebar />
      <div className="content">
        <div className="getToken">
          <ul>
            <li>
              <h1>Códigos sem uso </h1>
              <button onClick={() => setVisible(true)}>Gerar novo</button>
            </li>
            <header>
              <b>Código:</b>
              <b>Nível:</b>
              <b>Data de criação:</b>
            </header>
            <ul>
              <li>
                <label>558855</label>
                <p>Normal</p>
                <label>20/07/2020</label>
              </li>
            </ul>
          </ul>
        </div>
        <div className="activeUsers">
          <h1>Usuarios:</h1>
          <header>
            <b>Nome:</b>
            <b>Setor</b>
            <b>Nível</b>
            <b>Telefone</b>
          </header>
          <ul>
            <li>
              <label>Wayter Phelps</label>
              <label>Comunicação e TI</label>
              <span>Admin</span>
              <label>(34)9 8893-3932</label>
            </li>
            <li>
              <label>Walber Fellipe</label>
              <label>Comunicação e TI</label>
              <span>Admin</span>
              <label>(34)9 8893-1079</label>
            </li>
          </ul>
        </div>
      </div>
      {isVisible ? (
        <Modal>
          <h1>Gerar Token Para usuario:</h1>
          <h2>
            O usuario é um administrador?
            <br />
          </h2>
          <div className="toggle">
            <input
              type="checkbox"
              id="foo"
              onClick={() => setIsAdmin(!isAdmin)}
            />
            <label htmlFor="foo"></label>
            {isAdmin === true && <p>Sim</p>}
            {isAdmin === false && <p>Não</p>}
          </div>
          <div className="btns">
            <button className="save" type="button">
              Salvar
            </button>
            <button className="exit" onClick={() => setVisible(false)}>
              Cancelar
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Users;
