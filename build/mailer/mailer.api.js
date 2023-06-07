"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mailer_request_1 = require("./mailer.request");
var mailer = function (app) {
    app.use(function (req, _, next) {
        req.sendEmail = mailer_request_1.default;
        next();
    });
};
exports.default = mailer;
//# sourceMappingURL=mailer.api.js.map