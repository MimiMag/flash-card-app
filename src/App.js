import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Paper from './components/Paper';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Paper />
        <Footer />
      </div>
    );
  }
}

export default App;
