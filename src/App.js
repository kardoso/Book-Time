import React, { Component } from 'react';
import './App.css';
import Book from './components/Book'

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    
  return (
    <div className="App">
      <Book title="fantasy world" author="me" tag="read" rating="1 star"/>
    </div>
  );
  }
}

export default App;
