import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import {Update} from '../services/usuarioService.js'
import Doggie from '../assets/Doggie.png';
import Playing from '../assets/Playing.png';
import UserImage from '../assets/UserImage.png';
import {  Perfil } from '../services/usuarioService.js';
import BoneIcon from '../assets/BoneIcon.png'


function Mudar() {

    return (
        <div>
            <Navbar />
            <div className="column left">
                <img src={Playing} alt="Playing" width="370"></img>
            </div>
            <div className="column middle">
                <img src={UserImage} alt="User" width="150"></img>
                <Perfil />
                <img src={BoneIcon} alt="Playing" width="100"></img>
                <h2>Faça a troca da sua senha abaixo:</h2>
                <Update />
            </div>
            <div className="column right absolut">
                <img src={Doggie} alt="Doggie" width="370"></img>
            </div>
        </div>
    )
}

export default Mudar
