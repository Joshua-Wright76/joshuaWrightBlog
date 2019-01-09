import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Joshua Wright Blog</h1>
          <TopBar></TopBar>
      </div>
    );
  }
}

export default App;
