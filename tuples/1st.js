"use strict";
// TUPLES
Object.defineProperty(exports, "__esModule", { value: true });
// WE DONT HAVE ANY RESTRICTION IN THE ARRAYS
// fo ex: we can put number,string or any value at any position
var user = [1, "as"];
// but in tuple we have restrictions
var tUser;
tUser = ["as", 123, true];
console.log(tUser);
// if the above array is not in sequence as decalred then it will give error;
tUser.push(4);
console.log(tUser);
