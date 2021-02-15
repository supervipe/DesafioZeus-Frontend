import React from 'react';
import axios from 'axios';

export class Login extends React.Component {
    state = {
        email: '',
        senha: ''
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    handleChange2 = event => {
        
        }
    
    handleSubmit = event => {
    event.preventDefault();
        const url = `http://localhost:8000/usuario/login/`;
        const login = {
            email: this.state.email,
            senha: this.state.senha
        };
        axios.post(url, { login })
        .then(res => {
            console.log(res.data[0]);
        })
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Email:
                <input type="text" name="email" onChange={this.handleChange} />
                </label>
                <label>
                Senha:
                <input type="text" name="senha" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
            </div>
        )
    }
}

export class Cadastro extends React.Component {
    state = {
        nome: '',
        email: '',
        senha: '',
        nascimento: '',
        genero: '',
        cachorro: ''
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    handleSubmit = event => {
    event.preventDefault();
        const url = `http://localhost:8000/usuario/`;
        const cadastro = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            nascimento: this.state.nascimento,
            genero: this.state.genero,
            cachorro: this.state.cachorro
        };
        console.log(cadastro);
        axios.post(url, { cadastro })
        .then(res => {
            console.log(res);
            console.log(res.data[0]);
        })
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Nome:
                <input type="text" name="nome" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                Email:
                <input type="text" name="email" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                Senha:
                <input type="password" name="senha" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                Data de Nascimento:
                <input type="date" name="nascimento" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                Genero:
                <input type="text" name="genero" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                Nome dos seus cachorros:
                <input type="text" name="cachorro" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
            </div>
        )
    }
}