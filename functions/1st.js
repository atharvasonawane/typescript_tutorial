"use strict";
// FUNCTIONS
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return 2 + num;
}
var sum = add(5); //it gives an error as the argument should be number only
console.log(sum);
//Arrow function returning boolean
var customer = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return isPaid;
};
console.log(customer("atharva", "a@a.com"));
