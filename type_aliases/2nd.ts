
// READONLY AND OPTIONAL


type Info = {
    readonly _id: string
    name: string;
    email: String;
    isActive: boolean;
    credit_card?: number; 
}
// Above the _id is readonly and credit_Card is optional

let myInfo: Info = {
    _id:  "1245",
    name:"a",
    isActive: false,
    email:"a@.com"
}
// credit_card is not required here compulsory as its optional

// name can be changed
myInfo.name = "atharva"; 

// but id cant be change as it is readonly
// myInfo._id = 5;


console.log(myInfo);


export{}