import { Application } from "express";

import Customers from './customers/customers.api';
import Drivers from './drivers/drivers.api';
import Otp from './otp/otp.api';
import Vehicle from './vehicle/vehicle.api';
import Admin from './admin/admin.api';

const app = (app: Application) => {
    app.use('/api/v1/otp', Otp(app));
    app.use('/api/v1/customers', Customers(app));
    app.use('/api/v1/drivers', Drivers(app));
    app.use('/api/v1/admins', Admin(app));
    app.use('/api/v1/vehicles', Vehicle(app));
}

export default app;