import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


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
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
