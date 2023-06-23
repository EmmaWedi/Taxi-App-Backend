"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculateFare = function (distance, mileRate) {
    try {
        var basefare = 1;
        var _perM = mileRate;
        return Number(_perM) * Number(distance) + basefare;
    }
    catch (error) {
        return 0;
    }
};
exports.default = calculateFare;
//# sourceMappingURL=fare-calculator.util.js.map