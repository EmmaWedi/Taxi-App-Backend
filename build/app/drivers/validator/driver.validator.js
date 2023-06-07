"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joi = require("joi");
var newDriver = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        phone: joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
        password: joi.string().pattern(new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$')).required(),
        fullname: joi.string().min(3).max(50).required(),
        DoB: joi.date().max('12-31-1998').required()
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
    newDriver: newDriver,
    login: login,
    update: update
};
//# sourceMappingURL=driver.validator.js.map