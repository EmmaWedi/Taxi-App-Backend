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
    driver: {
        type: sequelize.UUID,
        references: {
            model: 'Drivers',
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
    rejectReason: sequelize.STRING,
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
//# sourceMappingURL=driverRejects.db.js.map