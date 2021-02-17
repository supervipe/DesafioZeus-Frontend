import React from 'react'
import '../App.css'
import Navbar from '../navbar/Navbar'
import Doggie from '../assets/Doggie.png';
import Playing from '../assets/Playing.png';

function Sobre() {
    return (
        <div>
            <Navbar />
            <div className="column left">
                <img src={Playing} alt="Playing" width="300"></img>
            </div>
            <div className="column middle">
                <h2>Controle Pet</h2>
                <br></br>
                <h3>Esse sistema foi construído para que o usuário podesse ter
                    melhor controle da ração do seu cachorro, com funcionalidades de 
                    adicionar suas compras de ração e checar o gasto mensal de ração 
                    da data escolhida!
                </h3>
                <br></br>
                <h3>
                    Para relato de problemas ou mais informações contactar:
                    <br></br>
                    <br></br>
                    Telefone: (85) 99248-2002
                    <br></br>
                    Email: victorsantos@unifor.br
                </h3>
            </div>
            <div className="column right absolut">
                <img src={Doggie} alt="Doggie" width="300"></img>
            </div>
        </div>
    )
}

export default Sobre
