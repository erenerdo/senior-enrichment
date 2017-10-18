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
            campuses.map((campus) => {
              return (
                <NavLink className="campusLink" key={campus.id} to={`/campuses/${campus.id}`}>
                  <div key={campus.id} className="campus rounded">
                    <h3 >{campus.name}</h3>
                    <img src={campus.imageURL} className="campus-pics"></img>
                  </div>
                </NavLink>
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
