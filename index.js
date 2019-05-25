import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


function MiComponente() {
  return <p>Hola mundo</p>
}

class MiComponenteDeClase extends Component {
  render() {
    return <p>Hola soy de la clase</p>
  }
}

let nombre = 'freddy'
function A(props) {
  return <p>nombre: {props.nombre} last: {props.last}</p>
}
function B(props) {
    return <p>Nombre es: {props.nombre}</p>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let last = "blanco"
    return (
      <div>
        < MiComponente />
        < MiComponenteDeClase />
        < A nombre='harrison' last={last}/>
        <B nombre='Freddy' />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
