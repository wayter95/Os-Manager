import React, { useState } from "react";
import Modal from "../Modal";
import { useHistory } from "react-router-dom";
import { FaUserCircle, FaAngleDown } from "react-icons/fa";
import "./style.css";


const ChangePassword: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const history = useHistory();

  function handleSubmit(e: any) {
    e.preventDefault();
    setVisible(true);
  }
  return (
    <div id="change-password">
      <form>
        <label>
          <p> Senha Atual </p>
          <input type="password" />
        </label>
        <label>
          <p> Nova senha </p>
          <input type="password" />
        </label>
        <label>
          <p> Confirme a senha </p>
          <input type="password" />
        </label>
        <button type="submit" onClick={() => history.push("/home")}>
          CONFIRMAR
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
