'use strict';
var Sequelize = require('sequelize');
//IMPORTANT: Initialize sequelize with your current local host database.
//Example:  = new Sequelize('database_name', 'username', password,' options for database)
var sequelize = new Sequelize('mirror_mirror', 'test','password', {
  dialect: 'postgres'
});


module.exports = (DataTypes) => {
 
  const Users = sequelize.define('Users', {
    github_username: Sequelize.STRING,
    github_displayName:Sequelize.STRING,
    email: Sequelize.STRING,
    github_id: Sequelize.INTEGER,
    profile_pic: Sequelize.STRING,
  }, {});

  return Users;
};