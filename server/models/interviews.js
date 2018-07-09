'use strict';
var Sequelize = require('sequelize');
//IMPORTANT: Initialize sequelize with your current local host database.
//Example:  = new Sequelize('database_name', 'username', password,' options for database)
var sequelize = new Sequelize('mirror_mirror', 'test','password', {
  dialect: 'postgres'
});
sequelize.sync();
module.exports = (DataTypes) => {
  var Interviews = sequelize.define('Interviews', {
    user_id: Sequelize.INTEGER,
    company: Sequelize.STRING,
    position: Sequelize.STRING,
    notes: Sequelize.STRING,
    interview_date: Sequelize.STRING,
    }, {});
  Interviews.associate = (models) => {
    // associations can be defined here
    Interviews.hasMany(models.Users, {
      foreignKey: 'id',
      as: 'Users'
    });
    Interviews.belongsTo(models.Questions, {
      foreignKey: 'interviewID'
    });
  };
  return Interviews;
};