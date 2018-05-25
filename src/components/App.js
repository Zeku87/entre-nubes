import React, { Component } from 'react';
import NowDate from './NowDate';
import Current from './Current';
import Location from './Location';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NowDate/>
        <Current/>
        <Location/>
      </div>
    );
  }
}

export default App;
