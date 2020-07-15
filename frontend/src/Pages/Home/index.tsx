import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import './style.css';

const Home = () => {
return(
    <div id="page-home">
        <Header/> 
        <Sidebar/>
        <div className="content">
            <h1>Teste</h1>
        </div>
    </div>
)
}

export default Home;