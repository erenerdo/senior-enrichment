import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class AddStudent extends Component {


  render() {
    return (
      <div>
        <h3 className="formHeader"> New Student Form </h3>
        <form id="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="What name bruh?"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="How do I hit you up?"></input>
          </div>
          <div className="form-group">
            <label htmlFor="major">Major</label>
            <input type="text" className="form-control" id="inputMajor" placeholder="What major fam?"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Campus</label>
            <select className="form-control" id="exampleSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

