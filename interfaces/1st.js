"use strict";
// INTERFACES
Object.defineProperty(exports, "__esModule", { value: true });
var atharva = { _id: 44, email: "a@a",
    trial: function () { return "hello"; },
    getcoupon: function (name, value) { return value; }
};
console.log(atharva);
console.log(atharva.getcoupon("ath", 33));
