import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const ChangePassword: React.FC = () => {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const history = useHistory();

  function handleSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <div id="change-password">
      <form>
        <label>
          <p> Senha Atual </p>
          <input
            type="password"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
        </label>
        <label>
          <p> Nova senha </p>
          <input
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </label>
        <label>
          <p> Confirme a senha </p>
          <input
            type="password"
            value={repeatPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </label>
        <button type="submit" onClick={() => history.push("/home")}>
          CONFIRMAR
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
