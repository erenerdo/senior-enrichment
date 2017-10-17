import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/student';


class Students extends Component {

  render() {
    const students = this.props.students;

    return (
      <div>
        <h3> Students </h3>
        <Link to="/add-students"><button id="plus">+</button></Link>
        <div id="students">
          <table>
            <thead>
              <tr>
                <th className="th">#</th>
                <th className="th">Name</th>
                <th className="th">Major</th>
                <th className="th">Email</th>
              </tr>
            </thead>
            <tbody>
              { students.map((student) => (
                  <tr key={student.id}>
                    <th className="th">#{student.id}</th>
                    <th className="th">{student.name}</th>
                    <th className="th">{student.major}</th>
                    <th className="th">{student.email}</th>
                    <th><button>x</button></th>
                  </tr>
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
  return {students: state.students};
};

const mapDispatch = null;

export default connect(mapStateToProps, mapDispatch)(Students);
