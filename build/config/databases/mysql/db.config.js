"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONFIG = void 0;
var dotenv = require("dotenv");
var db_model_1 = require("./db.model");
var _a = dotenv.config().parsed, DB_USERNAME = _a.DB_USERNAME, DB_PASSWORD = _a.DB_PASSWORD, ENVIRONMENT = _a.ENVIRONMENT, DB_HOST = _a.DB_HOST, DB_DIALECT = _a.DB_DIALECT, DB_PORT = _a.DB_PORT, DB = _a.DB;
var DB_CONFIG = {
    USERNAME: DB_USERNAME,
    PASSWORD: DB_PASSWORD,
    ENV: ENVIRONMENT,
    HOST: DB_HOST,
    DIALECT: DB_DIALECT,
    PORT: DB_PORT,
    DB: DB
};
exports.DB_CONFIG = DB_CONFIG;
switch (DB_CONFIG.ENV) {
    case db_model_1.dbEnvironment.PROD:
        DB_CONFIG.HOST = DB_HOST;
        break;
    default:
        DB_CONFIG.HOST = DB_HOST;
        break;
}
//# sourceMappingURL=db.config.js.map