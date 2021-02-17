import React from 'react'
import '../App.css';
import {Login} from '../services/usuarioService.js'

class LoginPage extends React.Component{
    
    state = { clicked: false }

    constructor(){
        super();
        window.localStorage.removeItem('user');
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return (
            <>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Controle Pet<i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <a className="nav-links" href="/cadastro">
                                Cadastrar-se
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="column left"></div>
                <div className="column middle">
                    <h2>Faça seu Login abaixo para entrar:</h2>
                    <Login />
                </div>
                <div className="column right"></div>
            </>
        )
    }
}

export default LoginPage
