import { Application, Request, NextFunction } from 'express';
import db from './database/admin.db';
import router from './routes/admin.routes';

const admin = (app: Application) => {
    app.use(async (req: Request | any, _, next: NextFunction) => {
        await db.sync({ alter: true });
        req.dbAdmin = db;
        next();
    });
    return router;
}

export default admin;