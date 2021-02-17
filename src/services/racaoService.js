import React from 'react';
import axios from 'axios';
import '../App.css'

export class Compra extends React.Component {
    state = {
        nome: '',
        quantidade: '',
        preco: '',
        data: '',
        usuario_fk: ''
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    handleSubmit = event => {
    event.preventDefault();
        const url = `http://localhost:8000/racao/`;
        /*const compra = {
            nome: this.state.nome,
            quantidade: this.state.quantidade,
            preco: this.state.preco,
            data: this.state.data,
            usuario_fk: JSON.parse(window.localStorage.getItem('user')).id
        };*/
        axios.post(url, { 
            nome: this.state.nome,
            quantidade: this.state.quantidade,
            preco: this.state.preco,
            data: this.state.data,
            usuario_fk: JSON.parse(window.localStorage.getItem('user')).id })
        .then(res => {
            console.log(res.data[0]);
            alert("Ração cadastrada com sucesso!")
        }).catch(function (error) {
            alert("Ocorreu um erro no cadastro da compra! Por favor conferir as informações novamente.")
        })
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
                Quantidade:
                <input type="number" name="quantidade" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Preço:
                <input type="number" step="0.01" name="preco" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                Data da compra:
                <input type="date" name="data" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <button type="submit" className="tamanho">Adicionar</button>
            </form>
            </div>
        )
    }
}

export class Mensal extends React.Component {
    state = {
        mes: '',
        ano: '',
        preco: 0
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    handleSubmit = async event => {
    const id = JSON.parse(window.localStorage.getItem('user')).id
    event.preventDefault();
        const url = `http://localhost:8000/racao/${id}`;
        /*const mensal = {
            data: this.state.ano + this.state.mes
        };*/
        await axios.post(url, { 
            data: this.state.ano + this.state.mes })
        .then(res => {
            console.log(res.data[0]);
            this.setState({ preco: res.data[0].somaPQ })
            if(this.state.preco == null){
                this.setState({ preco: 0})
            }
            console.log(this.state.preco)
        })
        console.log(this.state.preco)
        document.getElementById("a").style.visibility = "visible";
    }

    render() {
        return (
            <div className="tamanho">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Mês:
                    <input type="number" name="mes" onChange={this.handleChange} />
                    </label>
                    <label>
                    Ano:
                    <input type="number" name="ano" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <br></br>
                    <button type="submit" className="tamanho">Procurar</button>
                </form>
                <br></br>
                <h3 className="a" id="a" visibility = "hidden">
                    Gasto Mensal do mês {this.state.mes} do ano {this.state.ano} foi de {this.state.preco} reais!</h3>
            </div>
        )
    }
}