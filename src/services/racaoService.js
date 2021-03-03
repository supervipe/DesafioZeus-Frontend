import React from 'react';
import axios from 'axios';
import '../App.css';
import moment from 'moment';
import {TextField} from '@material-ui/core';


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
        axios.post(url, { 
            nome: this.state.nome,
            quantidade: this.state.quantidade,
            preco: this.state.preco,
            data: this.state.data,
            usuario_fk: JSON.parse(window.localStorage.getItem('user')).id })
        .then(res => {
            console.log(res.data[0]);
            alert("Produto cadastrado com sucesso!")
            window.location.reload(false);
        }).catch(function (error) {
            alert("Ocorreu um erro no cadastro da compra! Por favor conferir as informações novamente.")
        })
    }
    
    render() {
        return (
            <div className="tamanho">
            <form onSubmit={this.handleSubmit}>
                <TextField id="outlined-basic" label="Nome do Produto" variant="outlined" name="nome" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Quantidade" variant="outlined" type="number" name="quantidade" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Preço" variant="outlined" type="number" step="0.01" name="preco" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Data da compra" InputLabelProps={{shrink: true,}} variant="outlined" type="date" name="data" style={{width:400}} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                
                <button type="submit" className="tamanho" style={{height:50,width:100}}>Adicionar</button>
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
                    <TextField id="outlined-basic" label="Mês" type="number" variant="outlined" name="mes" style={{width:400}} onChange={this.handleChange}/>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" label="Ano" type="number" variant="outlined" name="ano" style={{width:400}} onChange={this.handleChange}/>
                    <br></br>
                    <br></br>
                    <button type="submit" className="tamanho" style={{height:50,width:100}}>Procurar</button>
                </form>
                <br></br>
                <h3 className="a" id="a" visibility = "hidden">
                    Gasto Mensal do mês {this.state.mes} do ano {this.state.ano} foi de R$ {this.state.preco}</h3>
            </div>
        )
    }
}

export class Historico extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          racoes: [],
        };
      }
    
    componentDidMount() {
        this.setNewData();
    }

    setNewData = async () => {
        const id = JSON.parse(window.localStorage.getItem('user')).id
        const url = `http://localhost:8000/racao/historico/${id}`;
        var racoes = []

        await axios.get(url)
        .then(res => {
            console.log(res.data);
            this.setState({
                racoes: res.data,
                });
            console.log(racoes)
        })
    }
    mapReturn(lista) {
        return lista.map(value => {
          return (
            <div key={value.id} className="borda">
              <p>{`Nome do Produto: ${value.nome} | Quantidade: ${value.quantidade} | Preço: ${value.preco} | Data: ${moment(value.data).format("DD/MM/YYYY")}`}</p>
            </div>
          );
        })
    }
    render() {
        return (
            <div className="tamanho">
                <h3>Histórico de compras</h3>
                {this.mapReturn(this.state.racoes)}
            </div>
        )
    }
}