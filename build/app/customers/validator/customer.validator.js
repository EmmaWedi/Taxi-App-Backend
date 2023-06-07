"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joi = require("joi");
var newCustomer = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        phone: joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
        password: joi.string().pattern(new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$')).required(),
        fullname: joi.string().min(3).max(50).required()
    })
};
var login = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: joi.string().pattern(new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$')).required()
    })
};
var update = {
    body: joi.object({
        fullname: joi.string().min(3).max(50).required()
    })
};
exports.default = {
    newCustomer: newCustomer,
    login: login,
    update: update
};
//# sourceMappingURL=customer.validator.js.map