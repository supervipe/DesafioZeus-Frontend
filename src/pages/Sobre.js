import React from 'react'
import '../App.css'
import Navbar from '../navbar/Navbar'
import Doggie from '../assets/Doggie.png';
import Playing from '../assets/Playing.png';
import icon from '../assets/icon.png'

function Sobre() {
    return (
        <div>
            <Navbar />
            <div className="column left">
                <img src={Playing} alt="Playing" width="370"></img>
            </div>
            <div className="column middle">
                <img src={icon} alt="Logo" height="200"/>
                <br></br>
                <h1>Controle Pet</h1>
                <br></br>
                <h3>Esse sistema foi desenvolvido para que o usuário pudesse ter
                    melhor controle das compras feitas para o seu cachorro. Contém funcionalidades de 
                    adicionar suas compras, verificar o histórico de compras e checar o gasto mensal das compras 
                    conforme data solicitada, também a visualização da suas informações e atualização da senha!
                </h3>
                <br></br>
                <h3>
                    Para relato de problemas ou mais informações contactar:
                    <br></br>
                    <br></br>
                    Telefone: (XX) XXXXX-XXXX
                    <br></br>
                    Email: XXXXXX@gmail.com
                </h3>
            </div>
            <div className="column right absolut">
                <img src={Doggie} alt="Doggie" width="370"></img>
            </div>
        </div>
    )
}

export default Sobre
