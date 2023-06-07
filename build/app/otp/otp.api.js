"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var otp_db_1 = require("./database/otp.db");
var otp_routes_1 = require("./routes/otp.routes");
var otp = function (app) {
    app.use(function (req, _, next) {
        req.dbOtp = otp_db_1.default;
        next();
    });
    return otp_routes_1.default;
};
exports.default = otp;
//# sourceMappingURL=otp.api.js.map