import './App.css';
import React from 'react'
import Navbar from './navbar/Navbar.jsx';
import {Login,Cadastro} from './services/usuarioService.js'
import Doggie from './assets/Doggie.png'
import Petting from './assets/Petting.png'
import Playing from './assets/Playing.png'

export default class App extends React.Component{
  render(){
    return (
      <>
        <div className="App">
          <Navbar />
          <div className="column left">
            <img src={Playing} alt="Trulli" width="300"></img>
          </div>
          <div className="column middle">
            <h2>Zeus</h2>
            <Cadastro />
          </div>
          <div className="column right">
          <img src={Doggie} alt="Trulli" width="300"></img>
          </div>
          
        </div>
      </>
    );
  }
}

