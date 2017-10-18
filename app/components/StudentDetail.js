import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditStudent from './EditStudent';
import { NavLink } from 'react-router-dom';

class StudentDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const student = this.props.student;
    const campuses = this.props.campuses;
    if (!student || !campuses) return null;
    const campusId = +student.campusId;
    const campus = campuses.find((camp) => camp.id === campusId);
    if (!campus) return null;
    return (
      <div>
        <h1>{student && student.name}</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="th">#ID Num</th>
              <th className="th">Name</th>
              <th className="th">Major</th>
              <th className="th">Email</th>
              <th className="th">Campus</th>
            </tr>
          </thead>
          <tbody>
            <tr key={student.id}>
              <th className="th">#{student.id}</th>
              <th className="th">{student.name}</th>
              <th className="th">{student.major}</th>
              <th className="th">{student.email}</th>
              <th className="th"><NavLink className="campusLink" to={`/campuses/${campus.id}`}>{campus && campus.name}</NavLink></th>
            </tr>
          </tbody>
        </table>
        <EditStudent id={student.id} history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const paramId = Number(ownProps.match.params.id);
  const student = state.students.find((ele) => {
    return ele.id === paramId;
  });
  return {
    student,
    campuses: state.campuses
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetail);
