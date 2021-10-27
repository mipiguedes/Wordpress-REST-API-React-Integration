import React, { Component } from 'react'
import Mensagem from './Mensagem';
import axios from 'axios';

export class Modulos extends Component {

    state = {
        modulos: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('wp-json/wp/v2/posts')
        .then( res => this.setState({
            modulos: res.data,
            isLoaded: true
        }) )
        .catch( err => console.log(err) );
    }

    render() {
        const { modulos, isLoaded } = this.state;

        if( isLoaded ){       
            return (
                <div>
                    { modulos.map( modulo => (
                        <Mensagem key={modulo.id} mensagem={modulo}/>
                    ) ) }
                </div>
            )
        }

        return <h3>Carregando...</h3>
    }
}

export default Modulos
