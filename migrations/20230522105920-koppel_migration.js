'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Customers", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING
      },
      password: Sequelize.STRING,
      fullname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isBlocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      salt: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      }
    },{
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['email', 'phone', 'uid']
        }
      ]
    }),
    queryInterface.createTable("Drivers", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING
      },
      password: Sequelize.STRING,
      fullname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      DoB: {
        type: Sequelize.DATE
      },
      isBlocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isApproved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      salt: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      }
    },{
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['email', 'phone', 'uid']
        }
      ]
    }),
    queryInterface.createTable("Admins", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING
      },
      password: Sequelize.STRING,
      fullname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isBlocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      salt: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      }
    },{
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['email', 'phone', 'uid']
        }
      ]
    }),
    queryInterface.createTable("Vehicles", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelYear: {
        type: Sequelize.STRING,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      driver: {
        type: Sequelize.UUID,
        references: {
          model: 'Drivers',
          key: 'id'
        }
      },
      licenseNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      vid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      condition: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numOfSeats: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now
      }
    },{
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['driver', 'licenseNumber']
        }
      ]
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Customers");
    queryInterface.dropTable("Drivers");
    queryInterface.dropTable("Admins");
    queryInterface.dropTable("Vehicles");
  }
};
