import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditCampus extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const imgURL = event.target.imgURL.value;
    const newCampusInfo = {};

    // Only Add Optional Props that are valid
    if (name) newCampusInfo.name = name;
    if (imgURL) newCampusInfo.email = imgURL;


    console.log('Info', newCampusInfo);
    // this.props.updateCampus(newCampusInfo);
    // this.props.history.push('/students');

  }

  render() {
    // const campus = this.props.campus;
    return (
      <div>
        <h3 className="formHeader"> Campus Edit Form </h3>
        <form id="form" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" className="form-control" aria-describedby="emailHelp" placeholder="What name bruh?"></input>
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

const mapStateToProps = (state) => {
  return { campuses: state.campuses };
};

const mapDispatch = (dispatch) => {
  return {
    // updateStudent: function (newInfo) {
    //   dispatch(updateStudentInfo(newInfo));
    // }
  };
};


export default connect(mapStateToProps, mapDispatch)(EditCampus);
