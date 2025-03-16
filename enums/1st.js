"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.AISLE;
console.log(seat);
