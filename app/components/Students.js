import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import StudentItem from './StudentItem';


class Students extends Component {

  render() {
    const students = this.props.students;

    return (
      <div>
        <h3> Students </h3>
        <NavLink to="/add-students">
          <button className="btn btn-default" id="plus">Add Student +</button>
        </NavLink>
        <div id="students">
          <table className="table">
            <thead>
              <tr>
                <th className="th">#ID Num</th>
                <th className="th">Detail</th>
                <th className="th">Name</th>
                <th className="th">Major</th>
                <th className="th">Email</th>
                <th className="th">Campus</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <StudentItem key={student.id} className="student-item" student={student} />
              ))
              }
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return { students: state.students };
};

const mapDispatch = null;


export default connect(mapStateToProps, mapDispatch)(Students);
