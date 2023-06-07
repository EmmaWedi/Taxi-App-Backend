"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var vehicle_handler_1 = require("../handler/vehicle.handler");
var jwt_api_1 = require("../../../jwt/jwt.api");
var joi_validate_1 = require("../../../joi/joi.validate");
var vehicle_validator_1 = require("../validator/vehicle.validator");
var router = express.Router();
router.use((0, jwt_api_1.default)());
router.post('/add', (0, joi_validate_1.default)(vehicle_validator_1.default.newVehicle), vehicle_handler_1.default.addVehicle);
router.put('/add/image', (0, joi_validate_1.default)(vehicle_validator_1.default.addImg), vehicle_handler_1.default.addImage);
router.get('/get', vehicle_handler_1.default.getAll);
router.get('/driver/get', vehicle_handler_1.default.getDriverVehicle);
exports.default = router;
//# sourceMappingURL=vehicle.routes.js.map