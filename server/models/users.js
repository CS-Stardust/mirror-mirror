'use strict';
var Sequelize = require('sequelize');
//IMPORTANT: Initialize sequelize with your current local host database.
//Example:  = new Sequelize('database_name', 'username', password,' options for database)
var sequelize = new Sequelize('mirror_mirror', 'test','password', {
  dialect: 'postgres'
});
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    github_username: Sequelize.STRING,
    github_displayName:Sequelize.STRING,
    email: Sequelize.STRING,
    access_token: Sequelize.STRING,
    profile_pic: Sequelize.STRING,
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Interviews, {
      foreignKey: 'user_id'
    });
  };
  return Users;
};