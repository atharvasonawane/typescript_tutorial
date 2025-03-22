"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    //MOST OF THE PEOPLE DONT USE THE BELOW
    // public email:string
    // private name:string
    // INSTEAD IT IS USED AS THIS;
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.country = "India";
    }
    return User;
}());
var atharva = new User("atharva", "a@a.com");
console.log(atharva);
// NOT ACCESSIBLE AS 'country' ITS PRIVATE
atharva.country;
