const routes = require('express').Router();

const {Campus} = require('../db/models');

routes.get('/', (req, res, next) => {
	Campus.findAll()
	.then(result => {
		res.json(result);
  })
  .catch(next);
});

routes.get('/:id', (req, res, next) => {
  const campusId = req.params.id;

	Campus.findAll({where: {id: campusId}})
	.then(result => {
		res.json(result);
  })
  .catch(next);
});

routes.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then((camp) => {
    res.json(camp);
  })
  .catch(next);
});

routes.put('/:id', (req, res, next) => {
  const campusId = req.params.id;

  Campus.update(req.body, {where: {id: campusId}, returning: true})
  .then((camp) => {
    res.json({camp});
  })
  .catch(next);
});

routes.delete('/:id', (req, res, next) => {
  const campusId = req.params.id;
  console.log(campusId);
  Campus.destroy({where: {id: campusId}})
  .then((result) => {
    res.json(result);
  })
  .catch(next);

});

module.exports = routes;
