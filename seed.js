// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require("bluebird");
const {
  db,
  Campus,
  Student,
} = require('./db/models');

const campuses = [
  {
    name: 'Livingston',
    imageURL: 'http://jnatoli.com/wp-content/uploads/2014/07/640px-natoli-nj-contractor-rutgers-dining-1.jpg'
  },
  {
    name: 'College Avenue',
    imageURL: 'https://s3-us-west-2.amazonaws.com/asset.plexuss.com/news/images/rutgers-campus-scene.jpg'
  },
  {
    name: 'Busch',
    imageURL: 'http://www.newbrunswick.rutgers.edu/sites/flagship/files/styles/ru_slideshow_medium/public/NR13HomecomingVHustn0799_ss.jpg?itok=ZXSEvdqS'
  },
  {
    name: 'Cook/Douglas',
    imageURL: 'http://static.panoramio.com/photos/large/4156913.jpg'
  }
];

const data = {
  student: [
    {
      name: 'Eren Erdogan',
      campus: campuses[0],
      major: 'Electrical and Computer Engineering',
      email: 'eren@rutgers.edu'
    },
    {
      name: 'CJ Aydin',
      campus: campuses[1],
      major: 'Mechanical Engineering',
      email: 'cj@rutgers.edu'
    },
    {
      name: 'Tim Sawma',
      campus: campuses[1],
      major: 'Electrical and Computer Engineering',
      email: 'tim@rutgers.edu'
    },
    {
      name: 'Chris Tran',
      campus: campuses[2],
      major: 'Mechanical Engineering',
      email: 'chris@rutgers.edu'
    },
    {
      name: 'Ryan Trombetta',
      campus: campuses[3],
      major: 'Biomedical Engineering',
      email: 'ryan@rutgers.edu'
    },
  ]
};

db
  .sync({ force: true })
  .then(function() {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        return db.model(name).create(item, {
          include: [Campus]
        });
      });
    });
  })
  .then(function() {
    console.log("Finished inserting data");
  })
  .catch(function(err) {
    console.error("There was totally a problem", err, err.stack);
  })
  .finally(function() {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
