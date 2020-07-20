import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import "./style.css";

const Home = () => {
  const history = useHistory();
  return (
    <div id="page-home">
      <Header />
      <Sidebar />
      <div className="content">
        <div className="lastOs">
          <ul>
            <li>
              <h1>Ultimas OS </h1>
              <button onClick={() => history.push("/os")}> Criar OS</button>
            </li>
          </ul>
          </div>
        <div className="createOs">
          <ul>
            <li>
            <b>Assunto</b>
            <b>Data Os</b>
            <b>Prioridade</b>
            <b>andamento</b>
            </li>
          </ul>

        </div>
        </div>
        <div className="notifications">
          <h1>Notificações</h1>
        </div>
      </div>
  );
};
export default Home;
