import {Compra, Mensal} from '../services/racaoService.js'
import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Doggie from '../assets/Doggie.png';
import Playing from '../assets/Playing.png';

function Compras() {
    return (
        <div>
            <Navbar />
            <div className="column left">
                <img src={Playing} alt="Playing" width="300"></img>
            </div>
            <div className="column middle">
                <h2>Cadastre a compra de uma nova ração abaixo:</h2>
                <Compra />
                <h3>Abaixo você pode procurar saber o gasto mensal de ração na data que inserir!</h3>
                <br></br>
                <Mensal />
            </div>
            <div className="column right absolut">
                <img src={Doggie} alt="Doggie" width="300"></img>
            </div>
        </div>
    )
}

export default Compras
