import React, { Component } from 'react';
import './App.css';
import Medications from './Medications';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Medications App!</h1>
        </header>
        <Medications />
      </div>
    );
  }
}

export default App;