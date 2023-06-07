import * as joi from 'joi';

const newDriver = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        phone: joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
        password: joi.string().pattern(new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$')).required(),
        fullname: joi.string().min(3).max(50).required(),
        DoB: joi.date().max('12-31-1998').required()
    })
}

const login = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: joi.string().pattern(new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$')).required()
    })
}

const update = {
    body: joi.object({
        fullname: joi.string().min(3).max(50).required()
    })
}

export default {
    newDriver,
    login,
    update
}