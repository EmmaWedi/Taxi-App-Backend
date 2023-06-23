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
    }),
    queryInterface.createTable("Bookings", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      admin: {
        type: Sequelize.UUID,
        references: {
          model: 'Admins',
          key: 'id'
        }

      },
      tripNumber: Sequelize.STRING,
      driver: {
        type: Sequelize.UUID,
        references: {
          model: 'Drivers',
          key: 'id'
        }
      },
      customer: {
        type: Sequelize.UUID,
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      orderId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      pickupLocation: Sequelize.STRING,
      destinationLocation: Sequelize.STRING,
      distance: Sequelize.STRING,
      estimate: Sequelize.STRING,
      estimatedDistance: Sequelize.STRING,
      estimatedTime: Sequelize.STRING,
      destinationLocationCordinates: Sequelize.STRING,
      pickupLocationCordinates: Sequelize.STRING,
      tracking: Sequelize.STRING,
      discountApplied: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      totalFare: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      charge: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      paymentMode: {
        type: Sequelize.ENUM('cash', 'card'),
        defaultValue: 'cash'
      },
      review: Sequelize.INTEGER,
      status: {
        type: Sequelize.ENUM('pending', 'rejected', 'cancelled', 'accepted', 'started', 'assigned'),
        defaultValue: 'pending'
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
          fields: ['tripNumber', 'customer', 'drvier', 'admin', 'status', 'createdAt', 'discountApplied', 'review']
        }
      ]
    }),
    queryInterface.createTable("Rejects", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      driver: {
        type: Sequelize.UUID,
        references: {
          model: 'Drivers',
          key: 'id'
        }
      },
      trip: {
        type: Sequelize.UUID,
        references: {
          model: 'Bookings',
          key: 'id'
        }
      },
      rejectReason: Sequelize.STRING,
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
          fields: ['drvier', 'rideId', 'createdAt']
        }
      ]
    }),
    queryInterface.createTable("Stops", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      customer: {
        type: Sequelize.UUID,
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      trip: {
        type: Sequelize.UUID,
        references: {
          model: 'Bookings',
          key: 'id'
        }
      },
      stopLocation: Sequelize.STRING,
      stopLocationCordinates: Sequelize.STRING,
      allowableStopTime: Sequelize.TIME,
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
          fields: ['drvier', 'rideId', 'createdAt']
        }
      ]
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Customers");
    queryInterface.dropTable("Drivers");
    queryInterface.dropTable("Admins");
    queryInterface.dropTable("Vehicles");
    queryInterface.dropTable("Bookings");
    queryInterface.dropTable("Rejects");
    queryInterface.dropTable("Stops");
  }
};
