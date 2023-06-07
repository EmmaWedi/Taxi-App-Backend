"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token_secret = void 0;
var dotenv = require("dotenv");
var SECRET = dotenv.config().parsed.SECRET;
exports.token_secret = SECRET;
//# sourceMappingURL=jwt.config.js.map