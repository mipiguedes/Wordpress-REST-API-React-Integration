import React, { Component } from 'react'

export class Mensagem extends Component {
    render() {
        const { title } = this.props.mensagem;
        return (
            <div>
                <h2>{title.rendered}</h2>
            </div>
        )
    }
}

export default Mensagem
