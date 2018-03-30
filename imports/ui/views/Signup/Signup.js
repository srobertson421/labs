import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
  signup = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    Accounts.createUser({
      username,
      email,
      password,
    }, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.signup}>
          <div>
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter username" />
          </div>
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

export default Signup;
