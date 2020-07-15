import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Sidebar: React.FC = () => {
  return (
    <div id="component-sidebar">
      <section>
      <ul>
        <li>
          <Link to="/home">
            <label htmlFor="home">Home</label>
          </Link>
        </li>
        <li>
          <Link to="/os">
            <label htmlFor="os">Ordens de serviços</label>
          </Link>
        </li>
        <li>
          <Link to="/documents">
            <label htmlFor="documents">Documentos</label>
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <label htmlFor="reports">Relatorios</label>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <label htmlFor="users">Usuarios</label>
          </Link>
        </li>
      </ul>
      </section>
    </div>
  );
};

export default Sidebar;
