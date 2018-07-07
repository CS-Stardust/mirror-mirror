'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    github_Username: Sequelize.STRING,
    github_DisplayName:Sequelize.STRING,
    email: Sequelize.STRING,
    accessToken: Sequelize.STRING,
    profilePic: Sequelize.STRING,
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Interviews, {
      foreignKey: 'user_id'
    });
  };
  return Users;
};