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
    return (
      <tr key={student.id}>
        <th className="th">#{student.id}</th>
        <th className="th">{student.name}</th>
        <th className="th">{student.major}</th>
        <th className="th">{student.email}</th>
        <th className="th">{student.campus.name}</th>
        <th><button
            onClick={this.removeStudentCallBack}
            className="btn btn-default"
        >x</button></th>
      </tr>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = { deleteStudent };

export default connect(mapStateToProps, mapDispatchToProps)(StudentItem);
