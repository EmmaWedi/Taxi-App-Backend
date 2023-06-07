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
    status: {
        type: sequelize.ENUM('pending', 'rejected', 'accepted', 'started', 'assigned'),
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
            fields: ['uid', 'customer', 'drvier', 'admin', 'status']
        }
    ]
});
exports.default = schema;
//# sourceMappingURL=booking.db.js.map