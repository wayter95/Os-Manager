import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import Header from "../../Components/Header";

import EditProfile from "../../Components/EditProfile";
import ChangePassword from "../../Components/ChangePassword";

const Profile = () => {
  const [state, setState] = useState("p");
  const history = useHistory();
  return (
    <div id="page-profile">
      <Header />
      <div className="content">
        <section className="sideProfile">
          <button id="p" onClick={() => setState("p")}>
            Editar Perfil
          </button>
          <button id="c" onClick={() => setState("c")}>
            Alterar senha
          </button>
        </section>
        <div className="form">
          {state === "p" && <EditProfile />}
          {state === "c" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
