import React, { Component } from 'react'
import './App.css'
import Conversor from './componente/Conversor'

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Conversor de moedas</h1>
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
    )
  }
}

export default App;