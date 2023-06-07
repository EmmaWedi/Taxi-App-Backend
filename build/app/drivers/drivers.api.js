"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var driver_db_1 = require("./database/driver.db");
var driver_routes_1 = require("./routes/driver.routes");
var drivers = function (app) {
    app.use(function (req, _, next) {
        req.dbDrivers = driver_db_1.default;
        next();
    });
    return driver_routes_1.default;
};
exports.default = drivers;
//# sourceMappingURL=drivers.api.js.map