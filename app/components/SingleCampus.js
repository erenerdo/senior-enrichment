import React, { Component } from 'react';
import StudentItem from './StudentItem';
import EditCampus from './EditCampus';
import { deleteCampus } from '../reducers/campus';
import { refreshStudentState } from '../reducers/student';
import { connect } from 'react-redux';


class SingleCampus extends Component {
  constructor(props) {
    super(props);
    this.removeCampusCallBack = this.removeCampusCallBack.bind(this);
  }

  removeCampusCallBack(event) {
    event.stopPropagation();
    console.log('ID', this.props.campus.id);
    this.props.removeCampus(this.props.campus.id);
    this.props.history.push('/campuses');
  }

  render() {
    const campus = this.props.campus;
    const students = this.props.students;
    if (!campus || !students) return null;
    // console.log('prop states', campus, students);
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
        <button onClick={this.removeCampusCallBack} id="campusBtn" className="btn btn-danger">Delete Campus</button>
        <div className="edit">
          <EditCampus campusId={campus.id} history={this.props.history} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeCampus: function (campusId) {
      dispatch(deleteCampus(campusId));
      dispatch(refreshStudentState(campusId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
