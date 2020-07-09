import React, { useState } from 'react';

import './style.css';

const Signup = () => {
  const [display, setDisplay] = useState('register');

  return (
    <form>
      <div id="page-signup">
        {display === 'register' && (
          <div className="register">
            <h1>Registre-se</h1>
            <label htmlFor="name">Nome: *</label>
            <input type="text" placeholder="Digite seu nome:" />

            <label htmlFor="username">Nome de Usuario: *</label>
            <input type="text" placeholder="Digite um nome de usuario:" />

            <label htmlFor="password">Senha: *</label>
            <input type="password" placeholder="Digite sua senha:" />

            <label htmlFor="accessCode">Código de acesso: *</label>
            <input type="text" name= "accessCode" placeholder="Digite aqui o codigo de acesso:" />

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
        )}
        {display === 'continue' && (
          <div className="continue">
            <h1>Dados de cadastro</h1>
            <label htmlFor="email">E-mail: *</label>
            <input type="email" placeholder="Digite seu e-mail:" />

            <label htmlFor="phone">Telefone: *</label>
            <input
              type="text"
              placeholder="Digite seu Telefone para contato:"
            />

            <label htmlFor="sector">Setor: *</label>
            <select name="setor" id="sector">
              <option value="Infras">Infras</option>
              <option value="Administrativo">Administrativo</option>
            </select>

            <label htmlFor="office">Cargo: *</label>
            <input type="text" placeholder="Digite seu cargo:" />

            <button className="btn" type="submit">
              Concluir
            </button>
            <p className="footer">
              Created by <strong>Creative Project</strong> size in 2020
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default Signup;
