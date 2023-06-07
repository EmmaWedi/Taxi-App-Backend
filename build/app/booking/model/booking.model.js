"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripType = exports.BookingStatus = void 0;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["pending"] = "pending";
    BookingStatus["accepted"] = "accepted";
    BookingStatus["started"] = "started";
    BookingStatus["in-route"] = "in-route";
    BookingStatus["delivered"] = "delivered";
    BookingStatus["rejected"] = "rejected";
    BookingStatus["queue"] = "queue";
})(BookingStatus = exports.BookingStatus || (exports.BookingStatus = {}));
var TripType;
(function (TripType) {
    TripType["PICKUP"] = "PICKUP";
    TripType["DESTINATION"] = "DESTINATION";
    TripType["COMPLETED"] = "COMPLETED";
})(TripType = exports.TripType || (exports.TripType = {}));
//# sourceMappingURL=booking.model.js.map