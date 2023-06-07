"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
var jwt_auth_1 = require("./jwt.auth");
var jwt_validate_1 = require("./jwt.validate");
var Jwt = function (app) {
    app.use(function (req, _, next) {
        req.generateToken = jwt_auth_1.default;
        next();
    });
};
exports.Jwt = Jwt;
exports.default = jwt_validate_1.default;
//# sourceMappingURL=jwt.api.js.map