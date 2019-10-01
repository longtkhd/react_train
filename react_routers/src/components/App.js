import React, { Component } from 'react';
import './../css/style.css';
import { BrowserRouter, Route ,NavLink } from 'react-router-dom';
import Home from './Home';
import contact from './contact';
import Nav from './Nav';
import Headers from './Headers';
import Footer from './footer';
import Menu from './Menu';
import About from './About';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav/>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/nav" component={Nav} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Headers} />  
        <Footer />      
      </BrowserRouter>
    );
  }
}



