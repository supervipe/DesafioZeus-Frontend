import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import {Update} from '../services/usuarioService.js'
import Doggie from '../assets/Doggie.png';
import Playing from '../assets/Playing.png';

function Mudar() {
    return (
        <div>
            <Navbar />
            <div className="column left">
                <img src={Playing} alt="Playing" width="300"></img>
            </div>
            <div className="column middle">
                <h2>Faça a troca da sua senha abaixo:</h2>
                <Update />
            </div>
            <div className="column right absolut">
                <img src={Doggie} alt="Doggie" width="300"></img>
            </div>
        </div>
    )
}

export default Mudar
