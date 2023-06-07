"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var jwt_config_1 = require("./jwt.config");
var validate = function (custom) {
    return function (req, res, next) {
        var authHeader = req.headers['authorization'];
        var token = authHeader && authHeader.split(' ')[1];
        if (token == null)
            return res.sendStatus(403);
        jwt.verify(token, jwt_config_1.token_secret, function (err, auth) {
            if (err)
                return res.sendStatus(403);
            if (custom) {
                var value = custom(auth);
                if (value.isValid) {
                    return res.sendStatus(403);
                }
            }
            req.user = auth;
            if (req.user.isBlocked) {
                return res.send('Account blocked, contact system administrator');
            }
            next();
        });
    };
};
exports.default = validate;
//# sourceMappingURL=jwt.validate.js.map