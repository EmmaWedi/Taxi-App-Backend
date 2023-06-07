"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin_db_1 = require("./database/admin.db");
var admin_routes_1 = require("./routes/admin.routes");
var admin = function (app) {
    app.use(function (req, _, next) {
        req.dbAdmin = admin_db_1.default;
        next();
    });
    return admin_routes_1.default;
};
exports.default = admin;
//# sourceMappingURL=admin.api.js.map