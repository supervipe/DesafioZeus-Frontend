import React from 'react'
import '../App.css';
import {Cadastro} from '../services/usuarioService.js'
import icon from '../assets/icon.png'

class CadastroPage extends React.Component{

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return (
            <>
                <nav className="NavbarItems">
                    <img src={icon} alt="Logo" height="70"/>
                        <h1 className="navbar-logo">Controle Pet<i className="fab fa-react"></i></h1>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <a className="nav-links" href="/login">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </nav>
                <div className="column left"></div>
                <div className="column middle">
                    <h2>Coloque suas informações abaixo para cadastrar-se:</h2>
                    <Cadastro />
                </div>
                <div className="column right"></div>
            </>
        )
    }
}

export default CadastroPage
