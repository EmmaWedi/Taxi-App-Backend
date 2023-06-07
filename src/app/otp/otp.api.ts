import { Application, Request, NextFunction } from 'express';
import db from './database/otp.db';
import router from './routes/otp.routes';

const otp = (app: Application) => {
    app.use((req: Request | any, _, next: NextFunction) => {
        req.dbOtp = db;
        next();
    })
    return router;
}

export default otp;