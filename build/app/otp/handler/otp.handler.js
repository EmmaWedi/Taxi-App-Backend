"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var otp_utils_1 = require("../utils/otp.utils");
var sendEmail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, code, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                email = req.body.email;
                return [4 /*yield*/, (0, otp_utils_1.randOtp)()];
            case 1:
                code = _a.sent();
                return [4 /*yield*/, req.dbOtp.findOneAndUpdate({ email: email }, {
                        $set: {
                            otp: code,
                            updatedAt: Date.now(),
                            expiresAt: moment().add(30, 'minutes')
                        },
                    }, {
                        upsert: true,
                        new: true
                    })];
            case 2:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        success: true,
                        message: 'success',
                        data: result
                    })];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_1.message
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
var sendPhone = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var phone, code, number, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                phone = req.body.phone;
                return [4 /*yield*/, (0, otp_utils_1.randOtp)()];
            case 1:
                code = _a.sent();
                number = (0, otp_utils_1.formatPhoneNumber)(phone);
                return [4 /*yield*/, req.dbOtp.findOneAndUpdate({ phone: number }, {
                        $set: {
                            otp: code,
                            updatedAt: Date.now(),
                            expiresAt: moment().add(30, 'minutes')
                        },
                    }, {
                        upsert: true,
                        new: true
                    })];
            case 2:
                result = _a.sent();
                return [2 /*return*/, res.json({
                        success: true,
                        message: 'success',
                        data: result
                    })];
            case 3:
                error_2 = _a.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_2.message
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getOtps = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, req.dbOtp.find({})];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json({
                        success: true,
                        message: 'success',
                        data: results
                    })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_3.message
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
var validateOtp = function (req, _a) {
    var channel = _a.channel, otp = _a.otp;
    return __awaiter(void 0, void 0, void 0, function () {
        var result, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, req.dbOtp.findOne({ $or: [{ email: channel, otp: otp }, { phone: channel, otp: otp }] })];
                case 1:
                    result = _b.sent();
                    if (!result || !result._id) {
                        throw Error('OTP Invalid');
                    }
                    return [2 /*return*/, moment().isBefore(result.expiresAt)];
                case 2:
                    err_1 = _b.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.default = {
    sendEmail: sendEmail,
    getOtps: getOtps,
    sendPhone: sendPhone,
    validateOtp: validateOtp
};
//# sourceMappingURL=otp.handler.js.map