import React from 'react';

import './style.css';

const Signup = () => {
    return (
        <div className="page-signup">
            <div className="content">
                <h1>REGISTRE-SE</h1>

                <label htmlFor="name">Nome: *</label>
                <input type="name"
                    placeholder="Digite seu nome:" />

                <label htmlFor="username">Nome de Usuario: *</label>
                <input type="UserName"
                    placeholder="Digite um nome de usuario:" />


                <label htmlFor="password">Senha: *</label>
                <input type="password"
                    placeholder="Digite sua senha:" />


                <label htmlFor="nome">Código de acesso: *</label>
                <input type="accesscode"
                    placeholder="Digite aqui o codigo de acesso:" />

                <button className="btn" type="submit">Continuar</button>
                <a href="/signin">Caso já possua cadastro clique aqui.</a>
                
            </div>
        </div>
    )
}

export default Signup;