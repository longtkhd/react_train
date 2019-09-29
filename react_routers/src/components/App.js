import React, { Component } from 'react';
import './../css/style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import contact from './contact';
import Nav from './Nav';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/nav" component={Nav} />
                
      </BrowserRouter>
    );
  }
}



