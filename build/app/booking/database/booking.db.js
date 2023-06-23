"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize = require("sequelize");
var db_conn_1 = require("../../../config/databases/mysql/db.conn");
var schema = db_conn_1.default.define('Bookings', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV4
    },
    admin: {
        type: sequelize.UUID,
        references: {
            model: 'Admins',
            key: 'id'
        }
    },
    tripNumber: sequelize.STRING,
    driver: {
        type: sequelize.UUID,
        references: {
            model: 'Drivers',
            key: 'id'
        }
    },
    customer: {
        type: sequelize.UUID,
        references: {
            model: 'Customers',
            key: 'id'
        }
    },
    orderId: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    pickupLocation: sequelize.STRING,
    destinationLocation: sequelize.STRING,
    distance: sequelize.STRING,
    estimate: sequelize.STRING,
    estimatedDistance: sequelize.STRING,
    estimatedTime: sequelize.STRING,
    destinationLocationCordinates: sequelize.STRING,
    pickupLocationCordinates: sequelize.STRING,
    tracking: sequelize.STRING,
    discountApplied: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    totalFare: {
        type: sequelize.INTEGER,
        defaultValue: 0
    },
    charge: {
        type: sequelize.INTEGER,
        defaultValue: 0
    },
    paymentMode: {
        type: sequelize.ENUM('cash', 'card'),
        defaultValue: 'cash'
    },
    review: sequelize.INTEGER,
    status: {
        type: sequelize.ENUM('pending', 'rejected', 'cancelled', 'accepted', 'started', 'assigned'),
        defaultValue: 'pending'
    },
    createdAt: {
        type: sequelize.DATE,
        defaultValue: Date.now
    },
    updatedAt: {
        type: sequelize.DATE,
        defaultValue: Date.now
    }
}, {
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['tripNumber', 'customer', 'drvier', 'admin', 'status', 'createdAt', 'discountApplied', 'review']
        }
    ]
});
exports.default = schema;
//# sourceMappingURL=booking.db.js.map