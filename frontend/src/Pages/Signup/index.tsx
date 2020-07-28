import React, { useState } from "react";

import "./style.css";

const Signup = () => {
  const [display, setDisplay] = useState("register");
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("");
  const [office, setOffice] = useState("");

  const renderRegister = () => (
    <div className="register">
      <h1>Registre-se</h1>
      <label htmlFor="name">Nome: *</label>
      <input
        type="text"
        placeholder="Digite seu nome:"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="username">Nome de Usuario: *</label>
      <input
        type="text"
        placeholder="Digite um nome de usuario:"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Senha: *</label>
      <input
        type="password"
        placeholder="Digite sua senha:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="accessCode">Código de acesso: *</label>
      <input
        type="text"
        placeholder="Digite aqui o codigo de acesso:"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
      />

      <button
        className="btn"
        type="button"
        onClick={() => setDisplay("continue")}
      >
        Continuar
      </button>
      <h2>
        Já possui uma conta ?<a href="/">Acesse aqui!</a>
      </h2>
      <p className="footer">
        Created by <strong>Creative Project</strong> size in 2020
      </p>
    </div>
  );

  const renderContinue = () => (
    <div className="continue">
      <h1>Dados de cadastro</h1>
      <label htmlFor="email">E-mail: *</label>
      <input
        type="text"
        placeholder="Digite seu e-mail:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">Telefone: *</label>
      <input
        type="text"
        placeholder="Digite seu Telefone para contato:"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="sector">Setor: *</label>
      <select
        name="sector"
        value={sector}
        onChange={(e) => setSector(e.target.value)}
      >
        <option value="" disabled selected hidden>
          Selecione o setor em que trabalha
        </option>
        <option value="Infra">Infra</option>
        <option value="TI">TI</option>
      </select>

      <label htmlFor="office">Cargo: *</label>
      <input
        type="text"
        placeholder="Digite seu cargo:"
        value={office}
        onChange={(e) => setOffice(e.target.value)}
      />

      <button className="btn" type="submit">
        Concluir
      </button>
      <p className="footer">
        Created by <strong>Creative Project</strong> size in 2020
      </p>
    </div>
  );

  return (
    <form>
      <div id="page-signup">
        {display === "register" && renderRegister()}
        {display === "continue" && renderContinue()}
      </div>
    </form>
  );
};

export default Signup;
