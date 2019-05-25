import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import Formulario from './Formulario'


class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts')

    promesa.then(response => response.json()).then(data => {
      this.setState({
        articles: data,
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.articles.map((article) => {
            return (
              <div className='card' style={{backgroundColor: 'red', color:'brown'}}>
                <p>{article.title}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function Contador(props) {
  const [contador, setContador] = useState(0)
  return (
    <div>
      <p>conteo: {contador}</p>
      <button onClick={ () => setContador(contador + 1 )}>aumentar</button>
      <button onClick={ () => setContador(contador - 1 )}>disminuir</button>
    </div>
  )
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
        <Contador />
        <Formulario />
        <Blog />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


/*
class Contador extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contador: 0,
    }
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  disminuir = () => {
    this.setState({
      contador: this.state.contador -1
    })
  }
  

  render () {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentar}>Aumentar</button>
        <button onClick={this.disminuir}>Disminuir</button>
      </div>
    )
  }
}
*/