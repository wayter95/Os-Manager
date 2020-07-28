import React, { useState } from "react";
import Modal from "../Modal";
import { useHistory } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./style.css";

const EditProfile: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const history = useHistory();

  function handleSubmit(e: any) {
    e.preventDefault();
    setVisible(true);
  }
  return (
    <div id="edit-profile">
      <form>
      <div className="icon">
        <FaUserCircle size="50" /> 
        <h2>User Name</h2>
      </div>
        <label>
          <p> Nome </p>
          <input type="text" placeholder="name" />
        </label>
        <label>
          <p> Nome de Usuario </p>
          <input type="text" placeholder="user.name" />{" "}
        </label>
        <label>
          <p> E-mail </p>
          <input type="text" placeholder="user.name@ebag.com.br" />
        </label>
        <label>
          <p> Telefone </p>
          <input type="text" placeholder="9 88933932" />
        </label>
        <label>
          <p> Setor </p>
          <input type="text" placeholder="Comunicação e TI" />
        </label>
        <label>
          <p> Cargo </p>
          <input type="text" placeholder="Técnico em informatica" />
        </label>

        <button type="submit" onClick={() => history.push("/home")}>
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
