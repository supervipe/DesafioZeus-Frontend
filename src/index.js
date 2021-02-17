import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sobre from './pages/Sobre'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login';
import CadastroPage from './pages/Cadastro';
import Compras from './pages/Compras';
import Mudar from './pages/Mudar';

ReactDOM.render( 
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cadastro" component={CadastroPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/compra" component={Compras} />
            <Route path="/mudarSenha" component={Mudar} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </ BrowserRouter>
  , document.getElementById('root')
);