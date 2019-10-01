import React from 'react';
import hamburger from './../imgs/hamburger.jpg';
import './../css/style.css';
import Nav from './Nav';



class Headers extends React.Component {

    render() {
        return (
            <div>
          
            <div className="intro">
                <img src={hamburger} alt="anh khong ton tai" />
                <div className="display">
                    <h1>Le Catering</h1>
                </div>
            </div>
            </div>


        );
    }
}



export default Headers;
