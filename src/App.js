import './App.css';
import React from 'react'
import Navbar from './navbar/Navbar.jsx';
import { Mensal} from './services/racaoService.js'
import Doggie from './assets/Doggie.png'
import Playing from './assets/Playing.png'
import BoneIcon from './assets/BoneIcon.png'

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
            <img src={Playing} alt="Playing" width="370"></img>
          </div>
          <div className="column middle">
            <h1>Olá {this.state.nome},</h1><h2> Aqui você poderá fazer o controle das compras para {this.state.cachorro}!</h2>
            <br></br>
            <h2>Você pode navegar pelo site para cadastrar novas compras e ver o histórico na página de Compras.
              Além de poder checar o seu Perfil ou até saber um pouco mais sobre 
              o Controle Pet na página Sobre. 
            </h2>
            <img src={BoneIcon} alt="Playing" width="100"></img>
            <h2>Abaixo você pode procurar saber o gasto mensal das compras na data que inserir!</h2>
            <Mensal />
          </div>
          <div className="column right absolut">
          <img src={Doggie} alt="Doggie" width="370"></img>
          </div>
          
        </div>
      </>
    );
  }
}

