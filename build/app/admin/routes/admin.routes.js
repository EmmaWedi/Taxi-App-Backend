"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var admin_handler_1 = require("../handler/admin.handler");
var joi_validate_1 = require("../../../joi/joi.validate");
var admin_validator_1 = require("../validator/admin.validator");
var jwt_api_1 = require("../../../jwt/jwt.api");
var router = express.Router();
router.post('/add', (0, joi_validate_1.default)(admin_validator_1.default.newAdmin), admin_handler_1.default.addAdmin);
router.post('/signin', (0, joi_validate_1.default)(admin_validator_1.default.login), admin_handler_1.default.signin);
router.use((0, jwt_api_1.default)());
router.get('/details', admin_handler_1.default.getAdminDetails);
router.put('/update', (0, joi_validate_1.default)(admin_validator_1.default.update), admin_handler_1.default.updateAdmin);
router.get('/logout', admin_handler_1.default.logout);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map