import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import './Navbar.css';

class Navbar extends Component {
  logout = () => {
    Meteor.logout();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <nav id="navbar">
        <NavLink to="/">Home</NavLink>
        { currentUser ? null : <NavLink to="/signup">Signup</NavLink> }
        { currentUser ? <NavLink to="/build/strip">Build Strip</NavLink> : null }
        { currentUser ? <NavLink to="/build/assay">Build Assay</NavLink> : null }
        { currentUser ? <NavLink to="/build/experiment">Build Experiment</NavLink> : null }
        { currentUser ? <button type="button" onClick={this.logout}>Logout</button> : null }
      </nav>
    );
  }
}

export default Navbar;
