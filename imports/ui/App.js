import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

// Views
import Home from './views/Home';
import Signup from './views/Signup';
import CreateStrip from './views/CreateStrip';

// Components
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar currentUser={this.props.currentUser} />
            <Switch>
              <AuthRoute exact path="/" component={Home} {...this.props} />
              <Route exact path="/signup" component={Signup} />
              <AuthRoute path="/create-strip" component={CreateStrip} {...this.props} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withTracker(props => {
  return {
    currentUser: Meteor.user(),
  }
})(App);
