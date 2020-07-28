import React, { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

import { useHistory } from "react-router-dom";

import "./style.css";

toast.configure();
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);
  const history = useHistory();

  const override = css`
    display: block;
    margin: 0 auto;
  `;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setState(true);

    setTimeout(() => {
      setState(false);
      if (username === "admin" && password === "admin") {
        history.push("/home");

        toast.success(`Seja bem vindo ${username}`);
      } else {
        toast.error("Usuario ou senha incorretos", {
        });
      }
    }, 2000);
  };
  return (
    <div id="page-signin">
      <section className="logo-bar">
        <h1>OS Manager</h1>
        <p>
          Sistema de gerenciamento de chamados para melhoria no atendimento da
          Secretaria de Comunicação e tecnologia.
        </p>
      </section>
      <div className="content">
        <h1>Acesse sua conta!</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="">Nome de usuario: *</label>
          <input
            type="text"
            placeholder="Digite seu nome de usuario:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Senha: *</label>
          <input
            type="password"
            placeholder="Digite sua senha:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {state ? (
              <BeatLoader
                css={override}
                size={20}
                color={"#FFF"}
                loading={state}
              />
            ) : (
              <p>Salvar</p>
            )}
          </button>
          <a href="/identify">Esqueceu sua senha?</a>
          <label className="or">
            <hr /> <p> ou </p> <hr />
          </label>
          <button onClick={() => history.push("/signup")}>REGISTRAR</button>
        </form>
        <p className="footer">
          Created by <strong>Creative Project</strong> size in 2020
        </p>
      </div>
    </div>
  );
};

export default Signin;
