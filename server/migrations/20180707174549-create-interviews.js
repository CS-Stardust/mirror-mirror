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
         type: Sequelize.STRING
       },
       notes: {
         type: Sequelize.STRING
       },
       interview_date: {
        type:Sequelize.STRING
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