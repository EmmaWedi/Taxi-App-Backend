import * as dotenv from 'dotenv';
import { dbEnvironment } from './db.model';

interface DBConfigProps {
    DB_USERNAME: string;
    DB_PASSWORD: string;
    ENVIRONMENT: string;
    DB_HOST: string;
    DB_DIALECT: string;
    DB_PORT: string;
    DB: string;
}

interface DBProps {
    USERNAME: string;
    PASSWORD: string;
    ENV: string;
    HOST: string;
    DIALECT: string | any;
    PORT: number;
    DB: string;
}

const {
    DB_USERNAME,
    DB_PASSWORD,
    ENVIRONMENT,
    DB_HOST,
    DB_DIALECT,
    DB_PORT,
    DB
}: DBConfigProps | any = dotenv.config().parsed;

let DB_CONFIG: DBProps = {
    USERNAME: DB_USERNAME,
    PASSWORD: DB_PASSWORD,
    ENV: ENVIRONMENT,
    HOST: DB_HOST,
    DIALECT: DB_DIALECT,
    PORT: DB_PORT,
    DB: DB
}

switch (DB_CONFIG.ENV) {
    case dbEnvironment.PROD:
        DB_CONFIG.HOST = DB_HOST;
        break;
    default:
        DB_CONFIG.HOST = DB_HOST;
        break;
}

export { DB_CONFIG };