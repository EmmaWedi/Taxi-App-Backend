"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var moment = require("moment");
var schema = new mongoose.Schema({
    phone: String,
    email: String,
    otp: { type: String, max: 8 },
    expiresAt: {
        type: Date,
        default: moment().add(30, 'minutes')
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    toJSON: {
        transform: function (doc, ret) {
            delete ret.__v;
        },
    },
    timestamps: true,
});
exports.default = mongoose.model('Otps', schema);
//# sourceMappingURL=otp.db.js.map