import React from "react";

class Cachorro extends React.Component {
  render() {
    return (
      <div>
        <h2>Nome: {this.props.nome}</h2>
        <ul>
          <li>Idade: {this.props.idade}</li>
          <li>Sexo: {this.props.sexo}</li>         
          <li>Tamanho: {this.props.tamanho} </li>
        </ul>
      </div>
    );
  }
}

export default Cachorro;
