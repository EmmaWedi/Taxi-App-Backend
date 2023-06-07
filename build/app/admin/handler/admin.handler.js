"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var password_module_1 = require("../../module/password.module");
var formatter_module_1 = require("../../module/formatter.module");
var addAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, fullname, password, phone, userExists, hash, securePassword, uid, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, email = _a.email, fullname = _a.fullname, password = _a.password, phone = _a.phone;
                return [4 /*yield*/, req.dbAdmin.findOne({ where: { email: email } })];
            case 1:
                userExists = _b.sent();
                if (userExists !== null)
                    throw Error("".concat(email, " already exists"));
                return [4 /*yield*/, (0, password_module_1.generateSalt)()];
            case 2:
                hash = _b.sent();
                return [4 /*yield*/, (0, password_module_1.generatePassword)(password, hash)];
            case 3:
                securePassword = _b.sent();
                return [4 /*yield*/, (0, formatter_module_1.Uid)()];
            case 4:
                uid = _b.sent();
                return [4 /*yield*/, req.dbAdmin.create({
                        email: email,
                        fullname: fullname,
                        password: securePassword,
                        phone: phone,
                        uid: uid.toUpperCase(),
                        salt: hash
                    })];
            case 5:
                result = _b.sent();
                return [2 /*return*/, res.json({
                        success: true,
                        message: 'success',
                        data: result
                    })];
            case 6:
                error_1 = _b.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_1 === null || error_1 === void 0 ? void 0 : error_1.message
                    })];
            case 7: return [2 /*return*/];
        }
    });
}); };
var signin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userExists, verified, token, uid, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, req.dbAdmin.findOne({ where: { email: email, isBlocked: false } })];
            case 1:
                userExists = _b.sent();
                if (userExists === null)
                    throw Error("Account Not Valid");
                return [4 /*yield*/, (0, password_module_1.validatePassword)(password, userExists.salt, userExists.password)];
            case 2:
                verified = _b.sent();
                if (!verified)
                    throw Error('Wrong Credentials');
                return [4 /*yield*/, req.generateToken({
                        uid: userExists.uid,
                        isBlocked: userExists.isBlocked
                    })];
            case 3:
                token = _b.sent();
                return [4 /*yield*/, (0, formatter_module_1.Uid)()];
            case 4:
                uid = _b.sent();
                return [4 /*yield*/, req.dbAdmin.update({ isActive: true, uid: uid.toUpperCase() }, { where: { id: userExists.id } })];
            case 5:
                _b.sent();
                return [2 /*return*/, res.json({
                        success: true,
                        message: "success",
                        data: token
                    })];
            case 6:
                error_2 = _b.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_2 === null || error_2 === void 0 ? void 0 : error_2.message
                    })];
            case 7: return [2 /*return*/];
        }
    });
}); };
var getAdminDetails = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin, details, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                admin = req.user;
                return [4 /*yield*/, req.dbAdmin.findOne({ where: { uid: admin.uid } })];
            case 1:
                details = _a.sent();
                if (details === null)
                    throw Error('Invalid Account');
                return [2 /*return*/, res.json({
                        success: true,
                        message: "success",
                        data: details
                    })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_3 === null || error_3 === void 0 ? void 0 : error_3.message
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin, data, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                admin = req.user;
                data = req.body;
                return [4 /*yield*/, req.dbAdmin.update(__assign({}, data), { where: { uid: admin.uid } })];
            case 1:
                result = _a.sent();
                if (result === null)
                    throw Error('Could not update record');
                return [2 /*return*/, res.json({
                        success: true,
                        message: "Update Successful"
                    })];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_4 === null || error_4 === void 0 ? void 0 : error_4.message
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
var logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var admin, result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                admin = req.user;
                return [4 /*yield*/, req.dbAdmin.update({ isActive: false }, { where: { uid: admin.uid } })];
            case 1:
                result = _a.sent();
                if (result === null)
                    throw Error('Could not update record');
                return [2 /*return*/, res.json({
                        success: true,
                        message: "Logout Successful"
                    })];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_5 === null || error_5 === void 0 ? void 0 : error_5.message
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    addAdmin: addAdmin,
    signin: signin,
    getAdminDetails: getAdminDetails,
    updateAdmin: updateAdmin,
    logout: logout
};
//# sourceMappingURL=admin.handler.js.map