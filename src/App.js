import React from 'react';

import './App.css';
import Menu from './components/menu.js'

class App extends React.Component {
  render() {
    return (
     <div className="menu"> 
      <Menu/>
     </div>
    );
  }
}


export default App;
