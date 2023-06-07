import { Request, Application, NextFunction } from 'express';
import send from './mailer.request';

const mailer = (app: Application) => {
    app.use((req: Request | any, _, next: NextFunction) => {
        req.sendEmail = send;
        next();
    })
}

export default mailer;