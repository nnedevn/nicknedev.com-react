import React, { Component } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// Import Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Test from './components/Test';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Navigation></Navigation>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
