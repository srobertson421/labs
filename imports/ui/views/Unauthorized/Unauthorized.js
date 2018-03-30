import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class Unauthorized extends Component {
  login = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    Meteor.loginWithPassword(email, password);
  }

  render() {
    return (
      <div>
        <h1>Please Login</h1>
        <form onSubmit={this.login}>
          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password" />
          </div>
          <div>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Unauthorized;
