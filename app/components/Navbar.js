import React, { Component } from 'react';
import { HashRouter as Router, Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/students" className="nav-btns"> Students </Link>
        <Link to="/campuses" className="nav-btns"> Campuses </Link>
        <Link to="/" className="nav-btns"> Home </Link>
      </nav>
    );
  }
}

