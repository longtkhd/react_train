import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <a className="navbar-brand" href="facebook.com/longnguyen2709">Example React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="facebook.com/longnguyen2709">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="facebook.com/longnguyen2709">Log In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}
