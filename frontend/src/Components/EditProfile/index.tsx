import React, { useState } from "react";
import Modal from "../Modal";
import { useHistory } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./style.css";

const EditProfile: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const history = useHistory();
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("");
  const [office, setOffice] = useState("");

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
        <label htmlFor="name">
          <p> Nome </p>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="username">
          <p> Nome de Usuario </p>
          <input
            type="text"
            placeholder="user.name"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p> E-mail </p>
          <input
            type="text"
            placeholder="user.name@ebag.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p> Telefone </p>
          <input
            type="text"
            placeholder="9 88933932"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          <p> Setor </p>
          <input
            type="text"
            placeholder="Comunicação e TI"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          />
        </label>
        <label>
          <p> Cargo </p>
          <input
            type="text"
            placeholder="Técnico em informatica"
            value={office}
            onChange={(e) => setOffice(e.target.value)}
          />
        </label>

        <button type="submit" onClick={() => history.push("/home")}>
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
