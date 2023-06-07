import { Application, NextFunction, Request } from 'express';
import db from './database/customers.db';
import router from './routes/customers.routes';

const customers = (app: Application) => {
    app.use((req: Request | any, _, next: NextFunction) => {
        req.dbCustomers = db;
        next();
    })
    return router;
}

export default customers;