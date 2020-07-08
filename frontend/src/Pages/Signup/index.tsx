import React from 'react';

import './style.css';

const Signup = () => {
    return (
        <div className="page-signup">
            <div className="content">
                <h1>Registre-se</h1>
                <form>

                <label htmlFor="name">Nome: *</label>
                <input type="text"
                    placeholder="Digite seu nome:" />

                <label htmlFor="username">Nome de Usuario: *</label>
                <input type="text"
                    placeholder="Digite um nome de usuario:" />


                <label htmlFor="password">Senha: *</label>
                <input type="password"
                    placeholder="Digite sua senha:" />


                <label htmlFor="nome">Código de acesso: *</label>
                <input type="text"
                    placeholder="Digite aqui o codigo de acesso:" />

                <button className="btn" type="submit">Continuar</button>
                <a href="/">Já possui uma conta ? Acesse aqui.</a>
                </form>
                <p className="footer">Created by <strong>Creative Project</strong> size in 2020</p>
            </div>
        </div>
    )
}

export default Signup;