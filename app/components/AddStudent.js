import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewStudent } from '../reducers/student';

class AddStudent extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler (event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const major = event.target.major.value;
    const campusId = Number(event.target.campus.value);

    const newStudent = {
      name,
      campusId,
      major,
      email
    };
    this.props.addStudent(newStudent);
    console.log(this.props);
    setTimeout(() => {
      this.props.history.push('/students');
    }, 50);
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h3 className="formHeader"> New Student Form </h3>
        <form id="form" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="What name bruh?"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="How do I hit you up?"></input>
          </div>
          <div className="form-group">
            <label htmlFor="major">Major</label>
            <input name="major" type="text" className="form-control" id="inputMajor" placeholder="What major fam?"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Campus</label>
            <select name="campus" className="form-control" id="exampleSelect1">
              {
                campuses.map((campus) => {
                  return (<option key={`${campus.id}`} value={`${campus.id}`}>{`${campus.name}`}</option>);
                })
              }
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {campuses: state.campuses};
};

const mapDispatch = (dispatch) => {
  return {
    addStudent: function (student) {
      dispatch(addNewStudent(student));
    }
  };
};


export default connect(mapStateToProps, mapDispatch)(AddStudent);
