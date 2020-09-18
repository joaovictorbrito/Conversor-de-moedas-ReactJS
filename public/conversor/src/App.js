import React, { Component } from 'react'
import './App.css'
import Conversor from './componente/Conversor'
import Animacao from './componente/animacao/animacao'

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Conversor de moedas</h1>
        <div className="container">
          <div className="Linha">
            <Conversor moedaA="USD" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          </div>
          <div className="Linha">
            <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
          </div>
          <div className="Linha">
            <Conversor moedaA="EUA" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="EUA"></Conversor>
          </div>
        </div>
        <Animacao />  
        <Animacao className="quadrado1"/>  
        <Animacao className="quadrado2"/>  
        <Animacao className="quadrado3"/>  
        <Animacao className="quadrado4"/>  
        <Animacao className="quadrado5"/>  
      </div>
    )
  }
}

export default App;