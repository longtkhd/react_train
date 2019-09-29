import React from 'react';

import './../css/style.css';



class Nav extends React.Component {

    render() {
        return ( 
          
            <div className="conteiner-fluid header fixed-top">
                <div className=" row">
                    <div className="brand col">
                        <a className="color" href="/">Gourmet au Catering</a>
                    </div>
                    <div className=" row d-none d-sm-inline">
                        <div className="brand  ">
                            <a className="color" href="about">About</a>
                            <a className="color" href="Menu">Menu</a>
                            <a className="color" href="contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}



export default Nav;
                    