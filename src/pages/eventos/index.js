import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'

export default class Evento extends Component {
    state = {
        eventos: {},
        local: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/eventos/${id}`);

        this.setState({ eventos: response.data });
    }
    render() {
        const { eventos, ...casaDeShow } = this.state;
        return (
            <div className="product-info">
                <img src={eventos.imagem} alt="imagem" />
                <h1>{eventos.nome}</h1>
                <p>Capacidade:{eventos.capacidade}</p>
                <p>Data: {eventos.data}</p>
                <p>Preço: R${eventos.preco}</p>
            </div>
        )
    }
}