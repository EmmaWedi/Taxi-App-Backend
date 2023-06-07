import * as joi from 'joi';

const email = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    })
}

const contact = {
    body: joi.object({
        phone: joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    })
}

export default {
    email,
    contact
}