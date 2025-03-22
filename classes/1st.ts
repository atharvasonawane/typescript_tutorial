class User{

    email:string
    name:string
    readonly country:string = "India";

    constructor(name: string,email: string){

        this.email = email
        this.name = name

    }
}

const atharva = new User("atharva", "a@a.com");
console.log(atharva);

// NOT ALLOWED TO CHANGE THE VALUE
// atharva.country = "USA";

// BUT ALLOWED TO ACCESS
atharva.country

export{}