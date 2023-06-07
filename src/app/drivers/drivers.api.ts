import { Application, NextFunction, Request } from 'express';
import db from './database/driver.db';
import router from './routes/driver.routes';

const drivers = (app: Application) => {
    app.use((req: Request | any, _, next: NextFunction) => {
        req.dbDrivers = db;
        next();
    })
    return router;
}

export default drivers;