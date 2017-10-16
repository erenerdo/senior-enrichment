import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

export default class Campuses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campuses: []
    };
  }

  componentDidMount () {
    axios.get('/api/campus')
    .then(res => res.data)
    .then(result => {
      console.log(result); // response json from the server!
      this.setState({campuses: result});
    });
  }

  render() {
    return (
      <div>
        <h3> Campuses </h3>
        <div id="campuses">
          {
            this.state.campuses.map((campus, index) => {
              return (
                <div key={index} className="campus">
                  <h3 >{campus.name}</h3>
                  <img src={campus.imageURL} className="campus-pics"></img>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

