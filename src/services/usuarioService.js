import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export class Login extends React.Component {
    state = {
        email: '',
        senha: ''
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    handleSubmit = event => {
    event.preventDefault();
        const url = `http://localhost:8000/usuario/login/`;
        /*const login = {
            email: this.state.email,
            senha: this.state.senha
        };*/
        axios.post(url, { 
            email: this.state.email,
            senha: this.state.senha })
        .then(res => {
            console.log(res.data[0]);
            if(res.data[0] != null) {
                localStorage.setItem('user', JSON.stringify(res.data[0]));
                window.location = '/';
            } else {
                alert("Usuário não encontrado! Por favor checar email ou senha.")
            }
        })
    }
    
    render() {
        return (
            <div className="tamanho">
            <form onSubmit={this.handleSubmit}>
                <label>
                Email:
                <input type="text" name="email" size="30" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Senha:
                <input type="text" name="senha" size="15" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <button type="submit" className="tamanho" size="20">Entrar</button>
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
        senhaC: '',
        nascimento: '',
        genero: '',
        cachorro: ''
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    handleSubmit = event => {
    event.preventDefault();
        if(this.state.senha == this.state.senhaC){
            const url = `http://localhost:8000/usuario/`;
            /*const cadastro = {
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
                nascimento: this.state.nascimento,
                genero: this.state.genero,
                cachorro: this.state.cachorro
            };*/
            axios.post(url, { 
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
                nascimento: this.state.nascimento,
                genero: this.state.genero,
                cachorro: this.state.cachorro })
            .then(res => {
                console.log(res.data[0]);
            })

            
            const url2 = `http://localhost:8000/usuario/login/`;
            const login = {
                email: this.state.email,
                senha: this.state.senha
            };
            axios.post(url2, { login })
            .then(res => {
                console.log(res.data[0]);
                if(res.data[0] != null) {
                    localStorage.setItem('user', JSON.stringify(res.data[0]));
                    window.location = '/';
                } else {
                    alert("Ocorreu um problema no cadastro! Por favor tentar novamente.");
                }
            })
        } else {
            alert("Senhas diferentes inseridas!");
        }
    }
    
    render() {
        return (
            <div className="tamanho">
            <form onSubmit={this.handleSubmit}>
                <label>
                Nome:
                <input type="text" name="nome" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Email:
                <input type="text" name="email" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Senha:
                <input type="password" name="senha" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Confirmação de Senha:
                <input type="password" name="senhaC" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Data de Nascimento:
                <input type="date" name="nascimento" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Gênero:
                <input type="text" name="genero" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Nome do seu cachorro:
                <input type="text" name="cachorro" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <button type="submit" className="tamanho">Cadastrar</button>
            </form>
            </div>
        )
    }
}

export class Update extends React.Component {
    state = {
        senhaAntiga: '',
        senha: '',
        senhaC: ''
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
    handleSubmit = event => {
    var id = JSON.parse(window.localStorage.getItem('user')).id

    event.preventDefault();
        if(this.state.senhaAntiga == JSON.parse(window.localStorage.getItem('user')).senha){
            if(this.state.senha == this.state.senhaC){
                const url = `http://localhost:8000/usuario/${id}`;
                /*const update = {
                    senha: this.state.senha
                };*/
                axios.put(url, { 
                    senha: this.state.senha })
                .then(res => {
                    console.log(res.data[0]);
                    window.localStorage.setItem('user',this.state.senha);
                    alert("Senha mudada com sucesso!");
                    window.location = '/login';
                })
            } else {
                alert("Senhas diferentes inseridas!")
            }
        } else {
            alert("Senha atual incorreta!")
        }    
        
    }
    
    render() {
        return (
            <div className="tamanho">
            <form onSubmit={this.handleSubmit}>
                <label>
                Senha Atual:
                <input type="text" name="senhaAntiga" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Nova Senha:
                <input type="text" name="senha" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Confirmar Nova Senha:
                <input type="text" name="senhaC" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <button type="submit" className="tamanho">Trocar Senha</button>
            </form>
            </div>
        )
    }
}