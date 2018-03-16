import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Working</h2>
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
