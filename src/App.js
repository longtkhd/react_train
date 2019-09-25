import React from 'react';

import './App.css';
import Menu from './components/header/header.js';
import Header from './components/menu/menu.js';
import Content from './components/content/content.js'

class App extends React.Component {
  render() {
    return (
     <div className="topmenu"> 
      <Menu/>
      <Header/>
      < Content anh = "img/01.jpg"
      tieude = "For those about to rock..."  />
      < Content anh = 'img/02.jpg'
      tieude = "We salute you!" />
      </div>
    );
  }
}


export default App;
