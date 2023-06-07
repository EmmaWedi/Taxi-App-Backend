"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.downloader = exports.uploader = void 0;
var fs = require("fs");
var path = require("path");
var uploader = function (_a) {
    var image = _a.image, id = _a.id;
    return new Promise(function (resolve, reject) {
        var _path = path.resolve("images/".concat(id, ".jpg"));
        var base64Data = image.split(',')[1];
        fs.writeFile(_path, base64Data, 'base64', function (err) {
            if (err)
                return reject(err);
            resolve("http://localhost:5500/images/".concat(id, ".jpg"));
        });
    });
};
exports.uploader = uploader;
var downloader = function (path) { return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, data) {
        if (err)
            return reject();
        resolve(data);
    });
}); };
exports.downloader = downloader;
var deleteFile = function (path) { return new Promise(function (resolve, reject) {
    fs.unlink(path, function (err) {
        if (err)
            return reject(false);
        resolve(true);
    });
}); };
exports.deleteFile = deleteFile;
//# sourceMappingURL=file.uploader.js.map