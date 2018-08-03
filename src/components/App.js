import React, { Component } from 'react';
import '../styles/App.css';
import {Header} from './Header'
import {Main} from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
      </div>
    );
  }
}

export default App;
