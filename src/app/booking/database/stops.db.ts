import * as sequelize from 'sequelize';
import SQLCONN from '../../../config/databases/mysql/db.conn';

const schema = SQLCONN.define('Rejects', {
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
})

export default schema;