'use strict';
var Sequelize = require('sequelize');
//IMPORTANT: Initialize sequelize with your current local host database.
//Example:  = new Sequelize('database_name', 'username', password,' options for database)
var sequelize = new Sequelize('mirror_mirror', 'test','password', {
  dialect: 'postgres'
});
const Users = require('./users')();
const Interviews = require ('./interviews');

module.exports = (DataTypes) => {
  var Questions = sequelize.define('Questions', {

    question: Sequelize.STRING,
    interview_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Interviews,
        key: 'id'
      }}
   
  }, {});

  return Questions;
};