import React, { Component } from "react";
import "./Navbar.css"; 


class Navbar extends Component {
    render() {
      return (
          <nav className="navbar navbar-default fixed-top">
           <ul>
            <li className="item1">Clicky Game</li>
            <li className="item2">Click an image to begin</li>
            <li className="item3">Score: {this.props.score}</li>
          </ul>
        </nav>
      );
    }
  }

export default Navbar;