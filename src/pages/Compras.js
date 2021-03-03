import {Compra, Historico, Mensal} from '../services/racaoService.js'
import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Doggie from '../assets/Doggie.png';
import Playing from '../assets/Playing.png';

function Compras() {
    return (
        <div>
            <Navbar />
            <div className="column left">
                <img src={Playing} alt="Playing" width="370"></img>
            </div>
            <div className="column middle">
                <h2>Cadastre sua nova compra abaixo:</h2>
                <Compra />
                <br></br>
                <Historico/>
            </div>
            <div className="column right absolut">
                <img src={Doggie} alt="Doggie" width="370"></img>
            </div>
        </div>
    )
}

export default Compras
