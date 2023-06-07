"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var otp_handler_1 = require("../handler/otp.handler");
var joi_validate_1 = require("../../../joi/joi.validate");
var otp_validator_1 = require("../validator/otp.validator");
var jwt_api_1 = require("../../../jwt/jwt.api");
var router = express.Router();
router.post('/phone', (0, joi_validate_1.default)(otp_validator_1.default.contact), otp_handler_1.default.sendPhone);
router.post('/email', (0, joi_validate_1.default)(otp_validator_1.default.email), otp_handler_1.default.sendEmail);
router.use((0, jwt_api_1.default)());
router.get('/get', otp_handler_1.default.getOtps);
exports.default = router;
//# sourceMappingURL=otp.routes.js.map