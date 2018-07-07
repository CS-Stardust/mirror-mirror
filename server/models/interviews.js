'use strict';
module.exports = (sequelize, DataTypes) => {
  var Interviews = sequelize.define('Interviews', {
    user_id: Sequelize.INTEGER,
    company: Sequelize.STRING,
    position: Sequelize.STRING,
    notes: Sequelize.STRING,
    interviewDate: Sequelize.DATE,
    questionsID: Sequelize.INTEGER,
    interviewID: Sequelize.INTEGER
  }, {});
  Interviews.associate = (models) => {
    // associations can be defined here
    Interviews.hasMany(models.Questions, {
      foreignKey: 'id',
      as: 'Questions'
    });
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