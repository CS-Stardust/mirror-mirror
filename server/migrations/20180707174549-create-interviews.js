'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Interviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       user_id: {
         type: Sequelize.INTEGER
       },
       company: {
         type: Sequelize.STRING
       },
       position: {
         type: Sequlize.STRING
       },
       notes: {
         type: Sequelize.STRING
       },
       interviewDate: {
        type:Sequelize.DATE
      },
      interviewID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Interviews');
  }
};