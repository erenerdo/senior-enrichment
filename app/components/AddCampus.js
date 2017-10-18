import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addNewStudent } from '../reducers/student';

class AddCampus extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler (event) {
    event.preventDefault();
    const name = event.target.name.value;
    const imageURL = event.target.imgURL.value;

    const newCampus = {
      name,
      imageURL
    };
    console.log(newCampus);
  }

  render() {

    return (
      <div>
        <h3 className="formHeader"> New Campus Form </h3>
        <form id="form" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" className="form-control"  aria-describedby="emailHelp" placeholder="What name bruh?"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Image URL</label>
            <input name="imgURL" type="text" className="form-control" placeholder="What image link fam?"></input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatch = (dispatch) => {
  return {
  //   addStudent: function (student) {
  //     // dispatch(addNewCampus(student));
  //   }
  };
};


export default connect(mapStateToProps, mapDispatch)(AddCampus);
