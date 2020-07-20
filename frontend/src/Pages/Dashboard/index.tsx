import React,{useState,useEffect} from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import { Bar } from "react-chartjs-2";

import './style.css';

const Dashboard = () => {

    const data = {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
        datasets: [
            {
                label: "Semanal",
                backgroundColor: "rgba(0, 128, 0,0.75)",
                data: [4, 5, 1, 10, 8, 0, 0]
            },
            {
                label: "Mensal",
                backgroundColor: "rgba(0, 0, 255,0.75)",
                data: [4, 5, 1, 10, 8, 0, 0,4, 5, 1, 10, 8, 0, 0,4, 5, 1, 10, 8, 0, 0,4, 5, 1, 10, 8, 0, 0,9,5]
            },

        ]
    }

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
                    <Bar
                        data={data}
                        width={100}
                        height={25}
                        options={{ responsive: true }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;