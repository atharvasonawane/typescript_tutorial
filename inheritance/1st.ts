
// INHERITANCE AND PROTECTES ACCESS MODIFIER

// 'private' modifiers are only available within the class but also it is not available to its inherited or child class
// AND so 'protected; is used in this case;


class User {

    private readonly country: string = "India";

    // 'protected' is not available outside the class but it is available to its inherited class
    protected _name:string;

    constructor(public name: string,
                public email: string) 
    {
        this._name = name;
    }

    get myName():string {
        return `${this._name}`;
    }

    set myName(value:string){
        if(value.length <= 3){
            throw new Error("Name must be more than 3 characters");
        }
        this._name = value;
    }
}

// INHERITING class 'User;
// The '.name' attribute is not availabe outside the class or its child class as it is private;
class SubUser extends User{
    
    changeName = (newUser:string) => {
        this._name = newUser;
    }
}

const character = new User("atharva", "a@a.com");
console.log(character);