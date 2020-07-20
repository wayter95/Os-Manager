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
          </ul>    
        </div>
        <div className="notifications">
          </div>
      </div>
    </div>
  );
};
export default Home;
