import React from "react";
import { FaUserCircle,FaAngleDown } from 'react-icons/fa';

import "./style.css";

const Profile = () => {
  return (
    <div id="page-signin">
      <section className="sideProfile">
        <label>Editar Perfil</label>
        <label>Alterar senha</label>
      </section>
      <div>
      <label className="icon"><FaUserCircle size="40" /></label>
      </div>
    </div>
  );
};

export default Profile;
