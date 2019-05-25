import React, { Component } from 'react'

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

export default Formulario