"use strict";
// TYPE ALIASES
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: user.name, id: 0, isActive: false };
}
console.log(createUser({ name: "Atharva", id: 9, isActive: true }));
