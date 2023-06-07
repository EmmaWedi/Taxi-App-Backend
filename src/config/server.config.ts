import * as dotenv from 'dotenv';

enum serverEnv {
    'TEST' = 'TEST',
    'PROD' = 'PROD'
}

interface ServerProps {
    port: number;
    host: string;
}

interface ServerConfigProps {
    ENVIRONMENT: string;
    PROD_SERVER_PORT: string;
    PROD_SERVER_HOST: string;
    TEST_SERVER_PORT: string;
    TEST_SERVER_HOST: string;
}

const {
    ENVIRONMENT,
    PROD_SERVER_PORT,
    PROD_SERVER_HOST,
    TEST_SERVER_PORT,
    TEST_SERVER_HOST
}: ServerConfigProps | any = dotenv.config().parsed;


let server: ServerProps = {
    port: 0,
    host: ''
};

switch (ENVIRONMENT) {
    case serverEnv['TEST']:
        server = {
            port: parseInt(TEST_SERVER_PORT),
            host: TEST_SERVER_HOST
        }
        break;
    default:
        server = {
            port: parseInt(PROD_SERVER_PORT),
            host: PROD_SERVER_HOST
        }
        break;
}

export const _server = server;