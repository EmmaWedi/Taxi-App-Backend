"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONFIG = void 0;
var dotenv = require("dotenv");
var db_model_1 = require("./db.model");
var _a = dotenv.config().parsed, DB_URL = _a.DB_URL, DB_URL_LOCAL = _a.DB_URL_LOCAL, DB_USERNAME = _a.DB_USERNAME, DB_PASSWORD = _a.DB_PASSWORD, ENVIRONMENT = _a.ENVIRONMENT;
var DB_CONFIG = {
    URL: '',
    USERNAME: DB_USERNAME,
    PASSWORD: DB_PASSWORD,
    ENV: ENVIRONMENT
};
exports.DB_CONFIG = DB_CONFIG;
switch (DB_CONFIG.ENV) {
    case db_model_1.dbEnvironment.PROD:
        DB_CONFIG.URL = DB_URL;
        break;
    default:
        DB_CONFIG.URL = DB_URL_LOCAL;
        break;
}
//# sourceMappingURL=db.config.js.map