"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require("nodemailer");
var mailer_config_1 = require("../config/mailer.config");
var send = function (mailOptions) { return new Promise(function (resolve, reject) {
    var transporter = nodemailer.createTransport(mailer_config_1.mailConfig);
    transporter.sendMail(mailOptions, function (err, info) {
        try {
            if (err)
                reject(err);
            resolve(info);
        }
        catch (err) {
            reject(err);
        }
    });
}); };
exports.default = send;
//# sourceMappingURL=mailer.request.js.map