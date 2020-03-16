import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'

export default class Local extends Component {
    state = {
        local: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/local/${id}`);

        this.setState({ local: response.data });
    }
    render() {
        const { local } = this.state;
        return (
            <div className="product-info">
                <h1>{local.nome}</h1>
                <p>{local.endereco}</p>
                <iframe src={local.linkEndereco} ></iframe>
            </div>
        )
    }
}