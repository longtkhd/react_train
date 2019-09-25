import React from 'react';

import './App.css';
import Menu from './components/header/header.js';
import Header from './components/menu/menu.js';
import Content from './components/content/content.js'
import Footer from './components/footer/footer.js'

class App extends React.Component {
  render() {
    return (
     <div className="topmenu"> 
      <Menu/>
      <Header/>
      < Content vt = "order-lg-2" anh = 'img/01.jpg'
      tieude = "For those about to rock..."  />
      < Content vt = "order-lg-1"
      anh = 'img/02.jpg'
      tieude = "We salute you!" />

      <Footer/>
      </div>
    );
  }
}


export default App;
