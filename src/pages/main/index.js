import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {
    state = {
        locais: [],
        productInfo: {},
        page: 1,
    }
    componentDidMount() {
        this.loadProducts();

    };

    loadProducts = async () => {
        const response = await api.get(`/local`);

        console.log(response.data);
        this.setState({ locais: response.data })
    };

 
    render() {
        const { locais } = this.state;

        return (
            <div className="lista-evento">
                {locais.map(local => (
                    <article key={local.id}>
                        <strong>{local.nome}</strong>
                        <p>{local.endereco}</p>
                        <iframe  src={local.linkEndereco} ></iframe>

                    </article>

                ))}
            </div>


        )
    }

}