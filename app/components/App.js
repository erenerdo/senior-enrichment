import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Campus from './Campus';
import Students from './Students';
import { connect } from 'react-redux';
import { fetchStudents} from '../reducers/student';
import { fetchCampuses } from '../reducers/campus';

class App extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar />
          <div id="content">
            <Switch>
              <Route exact path="/" component={Campus} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/add-students" component={Students} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = null;

const mapDispatch = (dispatch) => {

  return {
    fetchInitialData: function () {
      dispatch(fetchStudents());
      dispatch(fetchCampuses());
    }
  };
};


export default connect(mapStateToProps, mapDispatch)(App);
