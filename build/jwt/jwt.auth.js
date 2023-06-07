"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var jwt_config_1 = require("./jwt.config");
var generateToken = function (data, expiresIn) {
    if (expiresIn === void 0) { expiresIn = "30m"; }
    return jwt.sign(data, jwt_config_1.token_secret, { expiresIn: expiresIn });
};
exports.default = generateToken;
//# sourceMappingURL=jwt.auth.js.map