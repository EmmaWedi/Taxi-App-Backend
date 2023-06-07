import * as mongoose from 'mongoose';
import { dbEnvironment } from "./db.model";
import { DB_CONFIG } from './db.config';

const dbConn = async () => {
    mongoose.set('strictQuery', true);
    if (DB_CONFIG.ENV === dbEnvironment.TEST) {
        return mongoose.connect(DB_CONFIG.URL);
    }
    return mongoose.connect(
        DB_CONFIG.URL, {
        auth: {
            username: DB_CONFIG.USERNAME,
            password: DB_CONFIG.PASSWORD
        }
    });
}

export default dbConn;