"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize = require("sequelize");
var db_conn_1 = require("../../../config/databases/mysql/db.conn");
var schema = db_conn_1.default.define('Admins', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV4
    },
    email: {
        type: sequelize.STRING
    },
    password: sequelize.STRING,
    fullname: {
        type: sequelize.STRING,
        allowNull: false
    },
    uid: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: sequelize.STRING,
        allowNull: false
    },
    isBlocked: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    isActive: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    salt: sequelize.STRING,
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
            fields: ['email', 'phone', 'uid']
        }
    ]
});
exports.default = schema;
//# sourceMappingURL=admin.db.js.map