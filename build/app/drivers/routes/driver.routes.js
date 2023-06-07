"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var driver_handler_1 = require("../handler/driver.handler");
var joi_validate_1 = require("../../../joi/joi.validate");
var driver_validator_1 = require("../validator/driver.validator");
var jwt_api_1 = require("../../../jwt/jwt.api");
var router = express.Router();
router.post('/signup', (0, joi_validate_1.default)(driver_validator_1.default.newDriver), driver_handler_1.default.addDriver);
router.post('/login', (0, joi_validate_1.default)(driver_validator_1.default.login), driver_handler_1.default.signin);
router.use((0, jwt_api_1.default)());
router.get('/details', driver_handler_1.default.getDriverDetails);
router.put('/update', (0, joi_validate_1.default)(driver_validator_1.default.update), driver_handler_1.default.updateDriver);
router.get('/logout', driver_handler_1.default.logout);
exports.default = router;
//# sourceMappingURL=driver.routes.js.map