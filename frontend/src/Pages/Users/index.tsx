import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import './style.css';

const Users = () => {
return(
    <div>
        <Header/>
        <Sidebar/>
        <div>
            <h1>Usuarios</h1>
        </div>
    </div>
)
}

export default Users;