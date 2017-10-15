import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
    };

    this.deleteStudent = this.deleteStudent.bind(this);
  }

  componentDidMount() {
    axios.get('/api/student')
      .then(res => res.data)
      .then(result => {
        console.log(result); // response json from the server!
        this.setState({ students: result });
      });
  }

  deleteStudent () {

  }

  render() {
    return (
      <div>
        <h3> Students </h3>
        <Link to="/add-students"><button id="plus">+</button></Link>
        <div id="students">
          <table>
            <thead>
              <tr>
                <th className="th">#</th>
                <th className="th">Name</th>
                <th className="th">Major</th>
                <th className="th">Email</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.students.map((student) => (
                  <tr key={student.id}>
                    <th className="th">#{student.id}</th>
                    <th className="th">{student.name}</th>
                    <th className="th">{student.major}</th>
                    <th className="th">{student.email}</th>
                    <th><button>x</button></th>
                  </tr>
                ))

              }
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

