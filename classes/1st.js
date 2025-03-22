"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.country = "India";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var atharva = new User("atharva", "a@a.com");
console.log(atharva);
// NOT ALLOWED TO CHANGE THE VALUE
// atharva.country = "USA";
// BUT ALLOWED TO ACCESS
atharva.country;
