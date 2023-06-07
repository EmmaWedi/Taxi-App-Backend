import { Application, Request, NextFunction } from "express";
import pino from 'pino';

const Logger = pino();

const module = (app: Application) => {
    app.use((req: Request | any, _, next: NextFunction) => {
        req.logger = Logger;
        next();
    })
}

export default module;