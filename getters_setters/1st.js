"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.country = "India";
        this._name = name;
    }
    Object.defineProperty(User.prototype, "myName", {
        get: function () {
            return "".concat(this._name);
        },
        set: function (value) {
            if (value.length <= 3) {
                throw new Error("Name must be more than 3 characters");
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var character = new User("atharva", "a@a.com");
console.log(character);
console.log(character.myName);
character.myName = "asn";
console.log(character.myName);
