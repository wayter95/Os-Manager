import React from 'react';

import './style.css'

interface  UserProps{
    cssClass?: string
}

const DropdawnUser: React.FC<UserProps> = (props) => {
    return(
        <div id="component-dropdawn" className={props.cssClass}>
            <p>Perfil</p>
            <hr/>
            <p>Sair</p>
        </div>
    )
}

export default DropdawnUser;