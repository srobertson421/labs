import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Views
import Home from './views/Home';
import CreateStrip from './views/CreateStrip';

// Components
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/create-strip" component={CreateStrip} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
