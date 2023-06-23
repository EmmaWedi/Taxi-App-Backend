"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize = require("sequelize");
var db_conn_1 = require("../../../config/databases/mysql/db.conn");
var schema = db_conn_1.default.define('Rejects', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV4
    },
    customer: {
        type: sequelize.UUID,
        references: {
            model: 'Customers',
            key: 'id'
        }
    },
    trip: {
        type: sequelize.UUID,
        references: {
            model: 'Bookings',
            key: 'id'
        }
    },
    stopLocation: sequelize.STRING,
    stopLocationCordinates: sequelize.STRING,
    allowableStopTime: sequelize.TIME,
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
            fields: ['drvier', 'rideId', 'createdAt']
        }
    ]
});
exports.default = schema;
//# sourceMappingURL=stops.db.js.map