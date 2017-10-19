import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampusInfo } from '../reducers/campus';


class EditCampus extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const imageURL = event.target.imgURL.value;
    const newCampusInfo = { id: this.props.campusId };

    // Only Add Optional Props that are valid
    if (name) newCampusInfo.name = name;
    if (imageURL) newCampusInfo.imageURL = imageURL;

    this.props.updateCampus(newCampusInfo);
    this.props.history.push('/campuses');

  }

  render() {
    return (
      <div>
        <h3 className="formHeader"> Campus Edit Form </h3>
        <form id="form" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" className="form-control" aria-describedby="emailHelp" placeholder="What do you want to change the name to bruh?"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Image URL</label>
            <input name="imgURL" type="text" className="form-control" placeholder="What's the new image link fam?"></input>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatch = (dispatch) => {
  return {
    updateCampus: function (newInfo) {
      dispatch(updateCampusInfo(newInfo));
    }
  };
};


export default connect(mapStateToProps, mapDispatch)(EditCampus);
