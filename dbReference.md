# DB Models from Sequelize 

## Models(Tables) List: 
1. Users
2. Questions
3. Interviews


## Sequelize Table Construction Code:

### Users Info: 

This is the sequelize code for creating the Users table from before

```
up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        }, updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
```

### Interviews Info:

This is the sequelize code for creating the interviews table 

```
up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Interviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: 'id'
        }
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
      type: {
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
```

### Questions Info 

```
up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING
      },
      interview_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        
          references: {
            model: "Interviews",
            key: 'id'
          } 
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
```
---

