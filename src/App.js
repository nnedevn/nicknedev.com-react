import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Working</h2>
        <Header></Header>
        <Navigation></Navigation>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
