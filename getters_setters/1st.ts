
// GETTERS AND SETTERS
// THESE ARE BASICALLY USED TO CONTOL ACCESS TO THE CLASS ATTRIBUTES

class User {

    private readonly country: string = "India";

    private _name:string;

    constructor(public name: string,
                public email: string) 
    {
        this._name = name;
    }


    // AS '_name' is private it cant be accessed outside the class,
    // SO we create getter 'myName' to get its value outside the class
    get myName():string {
        return `${this._name}`;
    }

    // SETTER 'myName' is used to validate or set the private attributes of the class 
    set myName(value:string){
        if(value.length <= 3){
            throw new Error("Name must be more than 3 characters");
        }
        this._name = value;
    }


}

const character = new User("atharva", "a@a.com");
console.log(character);

// '_name' can be accessed using the getter
console.log(character.myName);

// '_name' is being manipulated by setter
character.myName = "asn";
console.log(character.myName);


export { }