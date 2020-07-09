import React from 'react';
import {useHistory} from 'react-router-dom';
import './style.css';

const Signin = () => {
    const history = useHistory();
return(
    <div id="page-signin">
        <section className="logo-bar">
            <h1>OS Manager</h1>
            <p>Sistema de gerenciamento de chamados para melhoria no atendimento
                 da Secretaria de Comunicação e tecnologia.</p>
        </section>
        <div className="content"> 
            <h1>Acesse sua conta!</h1>

            <form >
                <label htmlFor="">Nome de usuario: *</label>
                <input type="text" placeholder="Digite seu nome de usuario:"/>

                <label htmlFor="">Senha: *</label>
                <input type="password" placeholder="Digite sua senha:"/>

                <button type="submit" onClick={() => history.push('/home')}>ENTRAR</button>
                <label className="or"><hr /> <p> ou </p> <hr /></label>
                <button onClick={() => history.push('/signup')}>REGISTRAR</button>
            </form>
            <p className="footer">Created by <strong>Creative Project</strong> size in 2020</p>
        </div>
    </div>
)
}

export default Signin;