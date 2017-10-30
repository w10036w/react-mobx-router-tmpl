import React, { Component } from 'react';
//components
import Emoji from './components/Emoji';
//styles
import './App.styl';

import logo from './icons/logo.svg';
// const logo = require('../public/icons/logo.svg')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <img src={logo} className="app-logo" alt="logo" />
          <h2 className="App-title">
            <Emoji label="danger" emoji="☢" />
            <span> custom-react-scripts </span>
            <Emoji label="danger" emoji="☢" />
          </h2>
          <div className="App-subtitle">
            allow custom config for create-react-app without ejecting
          </div>
        </div>
        <div className='description'>
          <code>
            create-react-app my-app --scripts-version custom-react-scripts
          </code>
        </div>
      </div>
    );
  }
}

export default App;
