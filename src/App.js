import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
