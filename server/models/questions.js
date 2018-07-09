'use strict';
var Sequelize = require('sequelize');
//IMPORTANT: Initialize sequelize with your current local host database.
//Example:  = new Sequelize('database_name', 'username', password,' options for database)
var sequelize = new Sequelize('mirror_mirror', 'test','password', {
  dialect: 'postgres'
});
module.exports = (sequelize, DataTypes) => {
  var Questions = sequelize.define('Questions', {

    question: Sequelize.STRING,
    interview_id: Sequelize.INTEGER
   
  }, {});
  Questions.associate = function(models) {
    // associations can be defined here
    Questions.hasMany(models.Interviews, {
      foreignKey: 'interviewID'
    });
  };
  return Questions;
};