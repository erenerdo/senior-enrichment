import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Campus from './Campus';
import Students from './Students';

export default class Main extends Component {

  render() {
    return (
      <Router>
        <div id="main">
          <Navbar />
          <div id="content">
            <Switch>
              <Route exact path="/" component={Campus} />
              <Route exact path="/students" component={Students} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
