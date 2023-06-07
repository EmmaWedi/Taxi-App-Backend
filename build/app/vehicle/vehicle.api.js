"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehicle_db_1 = require("./database/vehicle.db");
var vehicle_routes_1 = require("./routes/vehicle.routes");
var vehicle = function (app) {
    app.use(function (req, _, next) {
        req.dbVehicle = vehicle_db_1.default;
        next();
    });
    return vehicle_routes_1.default;
};
exports.default = vehicle;
//# sourceMappingURL=vehicle.api.js.map