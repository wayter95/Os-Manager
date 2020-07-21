import React from "react";
import { FaUserCircle, FaAngleDown } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "./style.css";

const Profile = () => {
  const history = useHistory();
  return (
    <div id="page-profile">
      <section className="sideProfile">
        <label>Editar Perfil</label>
        <label>Alterar senha</label>
      </section>
      <div className="profile">
        <label className="icon">
          <FaUserCircle size="40" /> User Name
        </label>
        <form>
          <label>
            <p>Nome</p>
            <input type="text" placeholder="name" />
          </label>
          <label>
            <p>Nome de Usuario</p>
            <input type="text" placeholder="user.name" />{" "}
          </label>
          <label>
            <p>E-mail</p>
            <input type="text" placeholder="user.name@ebag.com.br" />
          </label>
          <label>
            Telefone <input type="text" placeholder="9 88933932" />
          </label>
          <label>
            Setor <input type="text" placeholder="Comunicação e TI" />
          </label>
          <label>
            Cargo <input type="text" placeholder="Técnico em informatica" />
          </label>

          <button type="submit" onClick={() => history.push("/home")}>
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
