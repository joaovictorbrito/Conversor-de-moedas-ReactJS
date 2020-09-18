import React, { Component, useRef } from 'react'
import '../animacao/animacao.css'

class Animacao extends Component{
   

    render(){
        return (
            <ul id="squares">
              
                <li className="quadrado1"></li>
                <li className="quadrado2"></li>
                <li className="quadrado3"></li>
                <li className="quadrado4"></li>
                <li className="quadrado5"></li>
                <li className="quadrado6"></li>
            </ul>
        )

    }  
   
}
export default Animacao;

