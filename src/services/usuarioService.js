import React from 'react';
import axios from 'axios';
import {TextField} from '@material-ui/core';

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
                <TextField id="outlined-basic" label="Email" variant="outlined" name="email" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" name="senha" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <button type="submit" className="tamanho" style={{height:50,width:100}}>Entrar</button>
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
                <TextField id="outlined-basic" label="Nome" variant="outlined" name="nome" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Email" variant="outlined" name="email" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" name="senha" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Confirmação de Senha" variant="outlined" type="password" name="senhaC" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Data de Nascimento" InputLabelProps={{shrink: true,}} variant="outlined" type="date" name="nascimento" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Gênero" variant="outlined" name="genero" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Nome do seu cachorro" variant="outlined" name="cachorro" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <button type="submit" className="tamanho" style={{height:50,width:100}}>Cadastrar</button>
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
                <TextField id="outlined-basic" label="Senha Atual" variant="outlined" type="password" name="senhaAntiga" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Nova Senha" variant="outlined" type="password" name="senha" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Confirmação da Nova Senha" variant="outlined" type="password" name="senhaC" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <button type="submit" className="tamanho" style={{height:50,width:200}}>Trocar Senha</button>
            </form>
            </div>
        )
    }
}

export class Perfil extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          nome: JSON.parse(window.localStorage.getItem('user')).nome,
          email: JSON.parse(window.localStorage.getItem('user')).email,
          cachorro: JSON.parse(window.localStorage.getItem('user')).cachorro,
          nascimento: JSON.parse(window.localStorage.getItem('user')).nascimento,
          genero: JSON.parse(window.localStorage.getItem('user')).genero
        };
      }

    
    render() {
        return (
            <div className="tamanho">
                <h4>Nome: {this.state.nome}</h4>
                <h4>Email: {this.state.email}</h4>
            </div>
        )
    }
}