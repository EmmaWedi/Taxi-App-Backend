"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._server = void 0;
var dotenv = require("dotenv");
var serverEnv;
(function (serverEnv) {
    serverEnv["TEST"] = "TEST";
    serverEnv["PROD"] = "PROD";
})(serverEnv || (serverEnv = {}));
var _a = dotenv.config().parsed, ENVIRONMENT = _a.ENVIRONMENT, PROD_SERVER_PORT = _a.PROD_SERVER_PORT, PROD_SERVER_HOST = _a.PROD_SERVER_HOST, TEST_SERVER_PORT = _a.TEST_SERVER_PORT, TEST_SERVER_HOST = _a.TEST_SERVER_HOST;
var server = {
    port: 0,
    host: ''
};
switch (ENVIRONMENT) {
    case serverEnv['TEST']:
        server = {
            port: parseInt(TEST_SERVER_PORT),
            host: TEST_SERVER_HOST
        };
        break;
    default:
        server = {
            port: parseInt(PROD_SERVER_PORT),
            host: PROD_SERVER_HOST
        };
        break;
}
exports._server = server;
//# sourceMappingURL=server.config.js.map