"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customers_api_1 = require("./customers/customers.api");
var drivers_api_1 = require("./drivers/drivers.api");
var otp_api_1 = require("./otp/otp.api");
var vehicle_api_1 = require("./vehicle/vehicle.api");
var app = function (app) {
    app.use('/api/v1/otp', (0, otp_api_1.default)(app));
    app.use('/api/v1/customers', (0, customers_api_1.default)(app));
    app.use('/api/v1/drivers', (0, drivers_api_1.default)(app));
    app.use('/api/v1/vehicles', (0, vehicle_api_1.default)(app));
};
exports.default = app;
//# sourceMappingURL=app.api.js.map