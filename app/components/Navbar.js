import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink to="/students" className="nav-btns"> Students </NavLink>
        <NavLink to="/campuses" className="nav-btns"> Campuses </NavLink>
        <NavLink to="/" className="nav-btns"> Home </NavLink>
      </nav>
    );
  }
}

