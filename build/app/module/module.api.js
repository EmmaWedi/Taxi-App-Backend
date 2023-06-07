"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pino_1 = require("pino");
var Logger = (0, pino_1.default)();
var module = function (app) {
    app.use(function (req, _, next) {
        req.logger = Logger;
        next();
    });
};
exports.default = module;
//# sourceMappingURL=module.api.js.map