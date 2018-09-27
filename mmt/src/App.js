import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Booking from './Components/Booking';

class App extends Component {
  render() {
    var cardStyles = {
      width: '250px',
      height: '250px',
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Booking style={cardStyles}/>
      </div>
    );
  }
}

export default App;
