const routes = require('express').Router();
const {Student} = require('../db/models');

routes.get('/', (req, res, next) => {
	Student.findAll({ include: [{ all: true }] })
	.then(result => {
		res.json(result);
  })
  .catch(next);
});

routes.get('/:id', (req, res, next) => {
  const StudentId = req.params.id;

	Student.findAll({where: {id: StudentId}})
	.then(result => {
		res.json(result);
  })
  .catch(next);
});

routes.post('/', (req, res, next) => {
  Student.create(req.body)
  .then((camp) => {
    console.log('Post', camp.data);
    res.json(camp);
  })
  .catch(next);
});

routes.put('/:id', (req, res, next) => {
  const StudentId = req.params.id;

  Student.update(req.body, {where: {id: StudentId}, returning: true})
  .then((camp) => {
    res.json({camp});
  })
  .catch(next);
});

routes.delete('/:id', (req, res, next) => {
  const StudentId = req.params.id;
  console.log(StudentId);
  Student.destroy({where: {id: StudentId}, returning: true})
  .then((result) => {
    res.json(result);
  })
  .catch(next);

});


module.exports = routes;
