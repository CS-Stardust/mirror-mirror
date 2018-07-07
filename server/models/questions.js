'use strict';
module.exports = (sequelize, DataTypes) => {
  var Questions = sequelize.define('Questions', {

    question: Sequelize.STRING,
    interviewID: Sequelize.INTEGER
   
  }, {});
  Questions.associate = function(models) {
    // associations can be defined here
    Questions.belongsTo(models.Interviews, {
      foreignKey: 'id',
    });
    Questions.hasMany(models.Interviews, {
      foreignKey: 'interviewID'
    });
  };
  return Questions;
};