"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joi = require("joi");
var email = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    })
};
var contact = {
    body: joi.object({
        phone: joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    })
};
exports.default = {
    email: email,
    contact: contact
};
//# sourceMappingURL=otp.validator.js.map