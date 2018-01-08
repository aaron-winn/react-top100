import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'

class App extends React.Component {
  state = { songs: [] }

  componentDidMount() {
      axios.get('api/songs')
        .then( res => this.setState({ songs: res.data }) )

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

