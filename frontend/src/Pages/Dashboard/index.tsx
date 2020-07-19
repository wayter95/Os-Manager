import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Chart from "react-apexcharts";

import './style.css';

const Dashboard = () => {
 
    return (
        <div id="page-dashboard">
            <Header />
            <Sidebar />
            <div className="content">
                <div className="osOpen">
                    <h1>Ordens de Serviços Abertas:</h1>
                    <span>21</span>
                </div>
                <div className="notifications">
                    <h1>Notificações:</h1>
                    <ul>
                        <li>
                            <p>USUARIO iniciou uma criou uma ordem de serviço</p>
                            <span>Alta</span>
                            <p>10/06/2020</p>
                        </li>
                    </ul>
                </div>
                <div className="graph">
                    <h1>Ordens de Serviços Diarias:</h1>
                    <label htmlFor="week">
                        <input type="checkbox" />
                        Semanal
                    </label>

                    <label htmlFor="month">
                        <input type="checkbox" />
                        Mensal
                    </label>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;