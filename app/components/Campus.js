import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Campuses extends Component {

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h3> Campuses
        <NavLink to="/add-campus">
            <button id="campusBtn" className="btn btn-default">AddCampus +</button>
          </NavLink>
        </h3>
        <div id="campuses">
          {
            campuses.map((campus, index) => {
              return (
                <div key={index} className="campus">
                  <h3 >{campus.name}</h3>
                  <img src={campus.imageURL} className="campus-pics"></img>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return { campuses: state.campuses };
};

const mapDispatch = null;


export default connect(mapStateToProps, mapDispatch)(Campuses);
