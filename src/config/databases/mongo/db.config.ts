import * as dotenv from 'dotenv';
import { dbEnvironment } from './db.model';

interface DBConfigProps {
    MONGO_DB_USERNAME: string;
    MONGO_DB_PASSWORD: string;
    ENVIRONMENT: string;
    DB_URL: string;
    DB_URL_LOCAL: string;
}

interface DBProps {
    USERNAME: string;
    PASSWORD: string;
    ENV: string;
    URL: string;
}

const {
    DB_URL,
    DB_URL_LOCAL,
    MONGO_DB_PASSWORD,
    MONGO_DB_USERNAME,
    ENVIRONMENT
}: DBConfigProps | any = dotenv.config().parsed;

let DB_CONFIG: DBProps = {
    URL: '',
    USERNAME: MONGO_DB_USERNAME,
    PASSWORD: MONGO_DB_PASSWORD,
    ENV: ENVIRONMENT
}

switch (DB_CONFIG.ENV) {
    case dbEnvironment.PROD:
        DB_CONFIG.URL = DB_URL;
        break;
    default:
        DB_CONFIG.URL = DB_URL_LOCAL;
        break;
}

export { DB_CONFIG };