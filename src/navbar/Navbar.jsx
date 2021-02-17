import React,{useState} from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    state = { clicked: false }

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
                            <a className="nav-links" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-links" href="/compra">
                                Compras
                            </a>
                        </li>
                        <li>
                            <a className="nav-links" href="/mudarSenha">
                                Mudar Senha
                            </a>
                        </li>
                        <li>
                            <a className="nav-links" href="/sobre">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a className="nav-links" href="/login">
                                LogOut
                            </a>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar
