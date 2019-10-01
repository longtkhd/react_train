import React from 'react';
import {  Link,NavLink } from "react-router-dom";


import './../css/style.css';



class Nav extends React.Component {

    render() {
        return ( 
          
            <div className="conteiner-fluid header fixed-top">
                <div className=" row">
                    <div className="brand col">
                        <NavLink  to="/" activeClassName="selected">Gourmet au Catering</NavLink>
                    </div>
                    <div className=" row d-none d-sm-inline">
                        <div className="brand  ">
                        
                            <NavLink activeClassName="selected" to="/about" >About</NavLink>
                            <NavLink activeClassName="selected" to="/menu" >Menu</NavLink>
                            <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}



export default Nav;
                    