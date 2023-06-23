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
var file_uploader_1 = require("../../module/uploader/file.uploader");
var formatter_module_1 = require("../../module/formatter.module");
var addVehicle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, brand, model, modelYear, color, modelType, licenseNumber, condition, numOfSeats, auth, driver, vid, vehicle, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, brand = _a.brand, model = _a.model, modelYear = _a.modelYear, color = _a.color, modelType = _a.modelType, licenseNumber = _a.licenseNumber, condition = _a.condition, numOfSeats = _a.numOfSeats;
                auth = req.user;
                return [4 /*yield*/, req.dbDrivers.findOne({ where: { uid: auth.uid, isApproved: false } })];
            case 1:
                driver = _b.sent();
                if (driver === null)
                    throw Error("Driver Not Valid");
                return [4 /*yield*/, (0, formatter_module_1.Uid)()];
            case 2:
                vid = _b.sent();
                return [4 /*yield*/, req.dbVehicle.create({
                        brand: brand,
                        model: model,
                        modelType: modelType,
                        modelYear: modelYear,
                        color: color,
                        licenseNumber: licenseNumber,
                        condition: condition,
                        numOfSeats: numOfSeats,
                        driver: driver['id'],
                        vid: vid
                    })];
            case 3:
                vehicle = _b.sent();
                return [2 /*return*/, res.json({
                        success: true,
                        message: 'success',
                        data: vehicle
                    })];
            case 4:
                error_1 = _b.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_1 === null || error_1 === void 0 ? void 0 : error_1.message
                    })];
            case 5: return [2 /*return*/];
        }
    });
}); };
var addImage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, image, vid, auth, vehicle, _path, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, image = _a.image, vid = _a.vid;
                auth = req.user;
                if (typeof image !== 'string')
                    throw Error('Invalid File Format');
                return [4 /*yield*/, req.dbVehicle.findOne({ where: { vid: vid, driver: auth.uid } })];
            case 1:
                vehicle = _b.sent();
                if (vehicle === null)
                    throw Error('Invalid Vehicle Id');
                return [4 /*yield*/, (0, file_uploader_1.uploader)({ image: image, id: vid })];
            case 2:
                _path = _b.sent();
                return [4 /*yield*/, vehicle.update({ image: _path }, { where: { driver: auth.uid, id: vehicle.id } })];
            case 3:
                _b.sent();
                return [2 /*return*/, res.json({
                        success: true,
                        message: 'Successfully updated vehicle',
                    })];
            case 4:
                error_2 = _b.sent();
                return [2 /*return*/, res.json({
                        success: false,
                        message: error_2 === null || error_2 === void 0 ? void 0 : error_2.message
                    })];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, req.dbVehicle.findAll()];
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
                        message: error_3 === null || error_3 === void 0 ? void 0 : error_3.message
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getDriverVehicle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var auth, vehicle, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                auth = req.user;
                return [4 /*yield*/, req.dbVehicle.findOne({ where: { driver: auth.uid } })];
            case 1:
                vehicle = _a.sent();
                if (vehicle === null)
                    throw Error('No Vehicle');
                return [2 /*return*/, res.json({
                        success: true,
                        message: 'success',
                        data: vehicle
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
exports.default = {
    addVehicle: addVehicle,
    addImage: addImage,
    getAll: getAll,
    getDriverVehicle: getDriverVehicle
};
//# sourceMappingURL=vehicle.handler.js.map