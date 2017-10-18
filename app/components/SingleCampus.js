import React, { Component } from 'react';
import StudentItem from './StudentItem';
import { connect } from 'react-redux';


class SingleCampus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const campus = this.props.campus;
    const students = this.props.students;
    if (!campus || !students) return null;
    console.log(campus, students);
    return (
      <div>
      <h1>{campus && campus.name}</h1>
      <h3> Students </h3>
      <div id="students">
        <table className="table">
          <thead>
            <tr>
              <th className="th">#ID Num</th>
              <th className="th">Student Detail</th>
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


const mapStateToProps = (state, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  const campus = state.campuses.find((ele) => {
    return ele.id === paramId;
  });
  const students = state.students.filter((student) => {
    return student.campusId === paramId;
  });
  return {
    students,
    campus
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
