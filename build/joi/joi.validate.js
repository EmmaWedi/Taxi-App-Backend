"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
};
var validator = function (validation) {
    return (function (req, res, next) {
        var _path = '';
        var validator;
        Object.keys(validation).map(function (key) {
            _path = key;
            validator = validation[key];
        });
        var _a = validator.validate(req[_path], options), error = _a.error, value = _a.value;
        if (error) {
            res.status(400).send("Validation error: ".concat(error.details.map(function (x) { return x.message; }).join(', ')));
        }
        else {
            req[_path] = value;
            next();
        }
    });
};
exports.default = validator;
//# sourceMappingURL=joi.validate.js.map