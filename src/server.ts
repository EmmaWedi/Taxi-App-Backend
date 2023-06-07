import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import Module from './app/module/module.api';

import { _server } from './config/server.config';
import ConnectDatabases from './config/databases/databases.api';
import Mailer from './mailer/mailer.api';

import { Jwt } from './jwt/jwt.api';

import KoppelApp from './app/app.api';

const start = async () => {
    try {
        const app = express();
        app.use(express.json({ limit: '50mb' }));
        app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
        app.use("/images", express.static(path.join(__dirname, "images")));
        app.use(morgan('combined'));
        Module(app);
        Jwt(app);
        Mailer(app);

        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
                return res.status(200).json({});
            }
            next();
        })

        KoppelApp(app);

        app.use((req, res, next) => {
            res.status(404).send('Bad Request');
            next();
        })

        await ConnectDatabases(app);
        app.listen(_server.port);
        console.log('server running on port: ' + _server.port);
    } catch (err) {
        console.log(err);
    }
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

start();
