
class User {

    private readonly country: string = "India";

    //MOST OF THE PEOPLE DONT USE THE BELOW
    // public email:string
    // private name:string


    // INSTEAD IT IS USED AS THIS;
    constructor(public name: string,
        public email: string) {

    }
}

const atharva = new User("atharva", "a@a.com");
console.log(atharva);

// NOT ACCESSIBLE AS 'country' IS PRIVATE
atharva.country


export { }