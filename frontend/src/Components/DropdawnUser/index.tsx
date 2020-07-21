import React from 'react';
import {useHistory} from 'react-router-dom'
import './style.css'

const DropdawnUser: React.FC = () => {
    const history = useHistory()
    return(
        <div id="component-dropdawn">
            <p onClick={() => history.push('profile')}>Perfil</p>
            <hr/>
            <p>Sair</p>
        </div>
    )
}

export default DropdawnUser;