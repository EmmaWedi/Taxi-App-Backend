import { Request, NextFunction, Application } from "express";
import genToken from './jwt.auth';
import validate from './jwt.validate';

export const Jwt = (app: Application) => {
    app.use((req: Request | any, _, next: NextFunction) => {
        req.generateToken = genToken;
        next();
    })
}

export default validate;