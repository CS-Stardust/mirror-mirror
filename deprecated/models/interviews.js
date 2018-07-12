'use strict';
var Sequelize = require('sequelize');
//IMPORTANT: Initialize sequelize with your current local host database.
//Example:  = new Sequelize('database_name', 'username', password,' options for database)
var sequelize = new Sequelize('mirror_mirror', 'test','password', {
  dialect: 'postgres'
});
const Users = require('./users')();
const Questions = require('./questions')();

module.exports = (DataTypes) => {
  var Interviews = sequelize.define('Interviews', {
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Users,
        key: 'id'
      }},
    company: Sequelize.STRING,
    position: Sequelize.STRING,
    notes: Sequelize.STRING,
    interview_date: Sequelize.STRING,
    type: Sequelize.STRING
    }, {});

  
  return Interviews;
};