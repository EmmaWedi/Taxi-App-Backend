import * as sequelize from 'sequelize';
import SQLCONN from '../../../config/databases/mysql/db.conn';

const schema = SQLCONN.define('Customers', {
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
},{
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['email', 'phone', 'uid']
        }
    ]
})

export default schema;