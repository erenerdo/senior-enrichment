'use strict';

// Require all the models
// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere
var db = require('../index');
var Sequelize = require('sequelize');

// This is also probably a good place for you to set up your associations

const Student = db.define('student', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	major: {
		type: Sequelize.STRING
	}
});

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	imageURL: {
		type: Sequelize.STRING,
		allowNull: false,
	}
}, {
		// hooks: {
		// 	beforeDestroy: function (instance) {
		// 		return Student.destroy({ where: {id: instance.id } });
		// 	}
		// }
	});

Campus.hasMany(Student, {
	onDelete: 'cascade',
	hooks: true
});

Student.belongsTo(Campus);

module.exports = {
	db,
	Student,
	Campus
};
