import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Navbar extends Component {
  logout = () => {
    Meteor.logout();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        { currentUser ? null : <NavLink to="/signup">Signup</NavLink> }
        <NavLink to="/create-strip">Create Strip</NavLink>
        { currentUser ? <button type="button" onClick={this.logout}>Logout</button> : null }
      </nav>
    );
  }
}

export default Navbar;
