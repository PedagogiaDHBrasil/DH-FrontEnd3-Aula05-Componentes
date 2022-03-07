import React from "react";
import Cachorro from "./components/Cachorro";

class ListaDeClientes extends React.Component {
  render() {
    return (
      <div>
        <h1>Clientes caninos da Veterinaria</h1>
        <ul>
          <Cachorro nome="Pingo" idade="11" sexo="Macho" tamanho="Grande"/>
          <Cachorro nome="Cristal" idade="13" sexo="Fêmea" tamanho="Pequeno"/>
          <Cachorro nome="Bob" idade="5" sexo="Macho"  tamanho="Mediano"/>
          <Cachorro nome="Nina" idade="2" sexo="Fêmea" tamanho="Pequeno"/>
        </ul>
      </div>
    );
  }
}

export default ListaDeClientes;
