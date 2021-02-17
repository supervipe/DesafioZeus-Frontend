import './App.css';
import React from 'react'
import Navbar from './navbar/Navbar.jsx';
import {Compra, Mensal} from './services/racaoService.js'
import Doggie from './assets/Doggie.png'
import Petting from './assets/Petting.png'
import Playing from './assets/Playing.png'

export default class App extends React.Component{
  state = {
    nome: JSON.parse(window.localStorage.getItem('user')).nome,
    cachorro: JSON.parse(window.localStorage.getItem('user')).cachorro
  }
  render(){
    return (
      <>
        <div className="App">
          <Navbar />
          <div className="column left">
            <img src={Playing} alt="Playing" width="300"></img>
          </div>
          <div className="column middle">
            <h1>Olá {this.state.nome},</h1><h2> aqui você poderá fazer o controle da ração do {this.state.cachorro}!</h2>
            <br></br>
            <h3>Você pode navegar pelo site para cadastrar a compra de novas rações na página de Compras.
              E pode trocar sua senha na página de Mudar Senha se desejar ou até saber um pouco mais sobre 
              o Controle Pet na página Sobre. 
            </h3>
            <h2>Abaixo você pode procurar saber o gasto mensal de ração na data que inserir!</h2>
            <Mensal />
          </div>
          <div className="column right absolut">
          <img src={Doggie} alt="Doggie" width="300"></img>
          </div>
          
        </div>
      </>
    );
  }
}

