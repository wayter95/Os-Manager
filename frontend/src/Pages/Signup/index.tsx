import React, { useState } from 'react';

import './style.css';

const Signup = () => {
  const [display, setDisplay] = useState('register');

  const renderRegister = () => (
    <div className="register">
      <h1>Registre-se</h1>
      <label htmlFor="name">Nome: *</label>
      <input type="text" placeholder="Digite seu nome:" />

      <label htmlFor="username">Nome de Usuario: *</label>
      <input type="text" placeholder="Digite um nome de usuario:" />

      <label htmlFor="password">Senha: *</label>
      <input type="password" placeholder="Digite sua senha:" />

      <label htmlFor="nome">Código de acesso: *</label>
      <input type="text" placeholder="Digite aqui o codigo de acesso:" />

      <button
        className="btn"
        type="button"
        onClick={() => setDisplay('continue')}
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
      <input type="text" placeholder="Digite seu e-mail:" />

      <label htmlFor="phone">Telefone: *</label>
      <input type="text" placeholder="Digite seu Telefone para contato:" />

      <label htmlFor="sector">Setor: *</label>
      <input type="text" placeholder="Escolha seu setor:" />

      <label htmlFor="office">Cargo: *</label>
      <input type="text" placeholder="Digite seu cargo:" />

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
        {display === 'register' && renderRegister()}
        {display === 'continue' && renderContinue()}
      </div>
    </form>
  );
};

export default Signup;
