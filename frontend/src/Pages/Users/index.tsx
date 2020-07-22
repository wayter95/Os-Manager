import React, { useState } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import Modal from "../../Components/Modal";

import "./style.css";

const Users = () => {
  const [isVisible, setVisible] = useState(false);

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
          <form>
            <label htmlFor="">Tipo de usuario</label>
            <input type="checkbox" />
            <div className="btns">
              <button className="save" type="submit">
                Salvar
              </button>
              <button className="exit" onClick={() => setVisible(false)}>
                Cancelar
              </button>
            </div>
          </form>
        </Modal>
      ) : null}
    </div>
  );
};

export default Users;
