import React from 'react';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao"
    }
  }
  componentWillMount = () => {
    console.log('componentWillMount da chay');
  };
  componentDidMount = () => {
    console.log("componentDidMount da chay");
    
  };
  
  
  

  render() {
   console.log('day la ham render da chay');
   
    return (
        <div className="App">
        </div>
    );
  }
}



export default App;
