"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var customers_handler_1 = require("../handler/customers.handler");
var jwt_api_1 = require("../../../jwt/jwt.api");
var joi_validate_1 = require("../../../joi/joi.validate");
var customer_validator_1 = require("../validator/customer.validator");
var router = express.Router();
router.post('/signup', (0, joi_validate_1.default)(customer_validator_1.default.newCustomer), customers_handler_1.default.signup);
router.post('/signin', (0, joi_validate_1.default)(customer_validator_1.default.login), customers_handler_1.default.signin);
router.use((0, jwt_api_1.default)());
router.get('/details', customers_handler_1.default.getCustomerDetails);
router.put('/update', (0, joi_validate_1.default)(customer_validator_1.default.update), customers_handler_1.default.updateCustomer);
router.get('/logout', customers_handler_1.default.logout);
exports.default = router;
//# sourceMappingURL=customers.routes.js.map