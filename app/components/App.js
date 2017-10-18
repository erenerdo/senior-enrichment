import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Campus from './Campus';
import Students from './Students';
import AddStudent from './AddStudent';
import AddCampus from './AddCampus';
import StudentDetail from './StudentDetail';
import Home from './Home';
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
              <Route exact path="/" component={Home} />
              <Route path="/students/:id" component={StudentDetail} />
              <Route path="/campuses" component={Campus} />
              <Route exact path="/students" component={Students} />
              <Route path="/add-students" component={AddStudent} />
              <Route path="/add-campus" component={AddCampus} />
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
