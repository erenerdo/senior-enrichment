import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class StudentItem extends React.Component {
  constructor (props) {
    super(props);
    this.removeStudentCallBack = this.removeStudentCallBack.bind(this);
  }

  removeStudentCallBack () {

  }

  render () {
    const student = this.props.student;
    return (
      <tr key={student.id}>
      <th className="th">#{student.id}</th>
      <th className="th">{student.name}</th>
      <th className="th">{student.major}</th>
      <th className="th">{student.email}</th>
      <th className="th">{student.campus.name}</th>
      <th><button>x</button></th>
    </tr>
    );
  }
}

const mapState = null;

const mapDispatch = null;

export default connect(mapState, mapDispatch)(StudentItem);
