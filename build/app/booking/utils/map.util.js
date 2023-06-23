"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var dotenv = require("dotenv");
var GOOGLE_MAP_KEY = dotenv.config().parsed.GOOGLE_MAP_KEY;
var getTravelTime = function (origin, destination) { return new Promise(function (resolve, reject) {
    try {
        var url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=".concat(origin, "&destinations=").concat(destination, "&key=").concat(GOOGLE_MAP_KEY);
        var headers = {
            "Content-type": "Application/json",
        };
        request.get({ url: url, headers: headers }, function (err, res, body) {
            try {
                if (err)
                    throw Error(err);
                resolve(JSON.parse(body));
            }
            catch (err) {
                reject(err);
            }
        });
    }
    catch (err) {
        reject(err);
    }
}); };
exports.default = getTravelTime;
//# sourceMappingURL=map.util.js.map