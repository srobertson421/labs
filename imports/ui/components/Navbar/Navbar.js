import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-strip">Create Strip</NavLink>
      </nav>
    );
  }
}

export default Navbar;
