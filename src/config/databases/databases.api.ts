import { Application } from 'express';
import SQLCONN from './mysql/db.conn';
import MONGOCONN from './mongo/db.conn';

const connectDatabases = async (app: Application) => {
    try {
        await SQLCONN.authenticate();
        const mongoConn = await MONGOCONN();
        console.log(`Mongo connected at: ${mongoConn.connections[0].host}:${mongoConn.connections[0].port}/${mongoConn.connections[0].name}`);
        console.log(`SQL connection successful`);
    } catch (error: any) {
        console.log('Database Connection Error: ', error.message)
        process.exit(1);
    }
}

export default connectDatabases;