"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//WEIRD BEHAVIOUR OF TUPLE
var tUser;
tUser = ["as", 123, true];
console.log(tUser);
// SOMEHOW ALLOWED
tUser.push(4);
console.log(tUser);
var person = ["as", 33];
person.push(22);
console.log(person);
var random = [11];
console.log(random);
