"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize = require("sequelize");
var db_conn_1 = require("../../../config/databases/mysql/db.conn");
var schema = db_conn_1.default.define('Vehicles', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV4
    },
    brand: {
        type: sequelize.STRING,
        allowNull: false
    },
    model: {
        type: sequelize.STRING,
        allowNull: false
    },
    modelYear: {
        type: sequelize.STRING,
        allowNull: false
    },
    color: {
        type: sequelize.STRING,
        allowNull: false
    },
    modelType: {
        type: sequelize.STRING,
        allowNull: false
    },
    driver: {
        type: sequelize.UUIDV4,
        references: {
            model: 'Drivers',
            key: 'id'
        }
    },
    licenseNumber: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: sequelize.STRING,
        allowNull: true
    },
    condition: {
        type: sequelize.STRING,
        allowNull: false
    },
    vid: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    numOfSeats: {
        type: sequelize.SMALLINT,
        allowNull: false
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
            fields: ['driver', 'licenseNumber']
        }
    ]
});
exports.default = schema;
//# sourceMappingURL=vehicle.db.js.map