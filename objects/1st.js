"use strict";
// Bad behaviour of objects
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Atharva",
    id: 4,
    isActive: true
};
// ALLOWED
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var result = createUser(User);
// NOT ALLOWED
var extraUser = { name: "Atharva", roll: 45 };
function newUser(_a) {
    var string = _a.name, boolean = _a.isActive, number = _a.id;
}
var newResult = newUser(extraUser);
