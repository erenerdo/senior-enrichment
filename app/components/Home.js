import React, { Component } from 'react';

import { connect } from 'react-redux';


class Home extends Component {

  render() {

    return (
      <div>
        <h1> Welcome To Rutgers University's Home Page </h1>
        <h4> Go Scarlet Knights!! </h4>
        <img id="homeImg" src="https://identity.rutgers.edu/sites/identity/files/scarlet_knight_logo_hp.gif"></img>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = null;

const mapDispatch = null;


export default connect(mapStateToProps, mapDispatch)(Home);
