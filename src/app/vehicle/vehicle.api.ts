import { Application, Request, NextFunction } from "express";
import db from './database/vehicle.db';
import router from './routes/vehicle.routes';

const vehicle = (app: Application) => {
    app.use((req: Request | any, _, next: NextFunction) => {
        req.dbVehicle = db;
        next();
    })
    return router;
}

export default vehicle;