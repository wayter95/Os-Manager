import React from 'react';
import './style.css';

const Signin = () => {
return(
    <div id="page-signin">
        <section className="logo-bar">
            <h1>OS Manager</h1>
            <p>Sistema de gerenciamento de chamados para<br/> melhoria no atendimento
                 da<br/> Secretaria de Comunicação e tecnologia.</p>
        </section>
        <div className="content"> 
            <h1>Acesse sua<br/> conta!</h1>

            <form >
                <label htmlFor="">Nome de usuario: *</label>
                <input type="text" placeholder="Digite seu nome de usuario:"/>

                <label htmlFor="">Senha: *</label>
                <input type="password" placeholder="Digite sua senha:"/>

                <button type="submit">ENTRAR</button>
                <label className="or"><hr /> <p>ou</p> <hr /></label>
                <button>REGISTRAR</button>
            </form>
            <p className="footer">Created by <strong>Creative Project</strong> size in 2020</p>
        </div>
    </div>
)
}

export default Signin;