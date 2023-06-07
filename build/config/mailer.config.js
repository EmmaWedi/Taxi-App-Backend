"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailConfig = void 0;
var dotenv = require("dotenv");
var _a = dotenv.config().parsed, MAIL_SERVICE = _a.MAIL_SERVICE, MAIL_HOST = _a.MAIL_HOST, MAIL_PORT = _a.MAIL_PORT, MAIL_TRUTHY = _a.MAIL_TRUTHY, MAIL_USER = _a.MAIL_USER, MAIL_PASS = _a.MAIL_PASS;
exports.mailConfig = {
    service: MAIL_SERVICE,
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: MAIL_TRUTHY,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS
    }
};
//# sourceMappingURL=mailer.config.js.map