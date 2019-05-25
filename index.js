import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


class Formulario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  syncChanges(value, property) {
    let state = {}
    state[property] = value
    this.setState(state)
  }

  submitForm = () => {
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <input 
          onChange={(event) => {this.syncChanges(event.target.value, 'email')}}
          type='email'
          value={this.state.email}
          placeholder='email'
        />
        <input 
          onChange={(event) => {this.syncChanges(event.target.value, 'password')}}
          type='password'
          value={this.state.password}
          placeholder='password'
        />
        <input 
          onClick={this.submitForm}
          type='submit'
          value="iniciar sesion"
        />
      </form>
    )
  }
}

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
        <Formulario />
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
