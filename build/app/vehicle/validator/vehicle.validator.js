"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joi = require("joi");
var newVehicle = {
    body: joi.object({
        brand: joi.string().min(3).max(30).required(),
        model: joi.string().min(3).max(30).required(),
        modelYear: joi.number().integer().required(),
        color: joi.string().min(3).max(15).required(),
        modelType: joi.string().max(20).required(),
        licenseNumber: joi.string().max(20).required(),
        condition: joi.string().max(20).required(),
        numOfSeats: joi.number().max(8).required()
    })
};
var addImg = {
    body: joi.object({
        image: joi.string().required(),
        vid: joi.string().required()
    })
};
exports.default = {
    newVehicle: newVehicle,
    addImg: addImg
};
//# sourceMappingURL=vehicle.validator.js.map