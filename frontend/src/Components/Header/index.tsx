import React,{useState} from 'react';
import { FaUserCircle,FaAngleDown } from 'react-icons/fa';

import DropdawnUser from '../DropdawnUser';

import './style.css'
const Header: React.FC = () => {
    const [status,setStatus] = useState(false);
    
    return (
        <div id="component-header" >
            <header>
            <h1>OS Manager</h1>
            <div  className="userInfo">
            <label className="icon"><FaUserCircle size="40" /></label>
            <label className="name">User Name</label>
            <label onClick={() => setStatus(!status)}  className="arrowDown"><FaAngleDown size="30" /></label>
            {
                status === true &&
                <DropdawnUser/>
            }
            </div>
            </header>
        </div>
    )
}
export default Header;