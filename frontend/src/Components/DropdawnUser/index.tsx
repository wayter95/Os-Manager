import React from "react";
import { useHistory } from "react-router-dom";

import { logout } from "../../services/auth";

import "./style.css";

const DropdawnUser: React.FC = () => {
  const history = useHistory();
  return (
    <div id="component-dropdawn">
      <div className="content-dropdawn">
        <p onClick={() => history.push("profile")}>Perfil</p>
        <hr />
        <p onClick={() => logout}>Sair</p>
      </div>
    </div>
  );
};

export default DropdawnUser;
