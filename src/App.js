import React from 'react';
import logo from './logo.svg';
import './App.css';

class Number2 extends React.Component {
  render() {
    return (
      <div className="col-4">
      <div className="card">
        <img className="card-img-top"src={this.props.linkanh}alt="a"></img>
        <div className="card-body">
          <h4 className="card-title">{this.props.tieude}</h4>
        </div>
      </div>
        
      </div>
    );
  }
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container">
        <div className="row">
          <Number2 tieude="anh1" linkanh="facebook.com"></Number2>
          <Number2 tieude="anh2" linkanh="facebook.com"></Number2>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
