"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_config_1 = require("./db.config");
var USERNAME = db_config_1.DB_CONFIG.USERNAME, PASSWORD = db_config_1.DB_CONFIG.PASSWORD, HOST = db_config_1.DB_CONFIG.HOST, DIALECT = db_config_1.DB_CONFIG.DIALECT, PORT = db_config_1.DB_CONFIG.PORT, DB = db_config_1.DB_CONFIG.DB;
var dbConn = new sequelize_1.Sequelize(DB, USERNAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    port: PORT,
    pool: {
        max: 10,
        idle: 3000
    }
});
exports.default = dbConn;
//# sourceMappingURL=db.conn.js.map