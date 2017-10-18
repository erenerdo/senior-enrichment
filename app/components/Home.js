import React, { Component } from 'react';

import { connect } from 'react-redux';


class Home extends Component {

  render() {

    return (
      <div>
        <h3> Welcome To The Home Page </h3>
        <h5> We out hereeee </h5>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = null;

const mapDispatch = null;


export default connect(mapStateToProps, mapDispatch)(Home);
