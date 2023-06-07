"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customers_db_1 = require("./database/customers.db");
var customers_routes_1 = require("./routes/customers.routes");
var customers = function (app) {
    app.use(function (req, _, next) {
        req.dbCustomers = customers_db_1.default;
        next();
    });
    return customers_routes_1.default;
};
exports.default = customers;
//# sourceMappingURL=customers.api.js.map