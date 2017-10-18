import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent } from '../reducers/student';


class StudentItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeStudentCallBack = this.removeStudentCallBack.bind(this);
  }

  removeStudentCallBack(event) {
    const { deleteStudent, student } = this.props;
    event.stopPropagation();
    deleteStudent(student.id);

  }

  render() {
    const student = this.props.student;
    const campuses = this.props.campuses;
    const campusIndex = +student.campusId - 1;
    const campus = campuses[campusIndex];
    console.log('Campus', campus);
    return (
      <tr key={student.id}>
        <th className="th">#{student.id}</th>
        <th className="th">{student.name}</th>
        <th className="th">{student.major}</th>
        <th className="th">{student.email}</th>
        <th className="th">{campus && campus.name}</th>
        <th><button
            onClick={this.removeStudentCallBack}
            className="btn btn-default"
        >x</button></th>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {campuses: state.campuses};
};

const mapDispatchToProps = { deleteStudent };

export default connect(mapStateToProps, mapDispatchToProps)(StudentItem);
