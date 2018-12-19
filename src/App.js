import React, { Component } from 'react';

import './App.css';


///componentes
import Login from './Login';
import  Header from './Header';
import Content from './Content';
import Footer from './Footer';





class App extends Component {
  render() {
    return (
      
      <div>

      <Login/>
      <Header/>
      <Content/>
      <Footer/>
      
      </div>
    );
  }
}

export default App;
