// FUNCTIONS

function add(num : number){        //type inference in function
    return 2+num;
}

let sum = add(5);               //it gives an error as the argument should be number only
console.log(sum);


//Arrow function returning boolean
let customer = (name:string,email:string, isPaid:boolean = false) : boolean => {

    // WILL GIVE ERROR AS ITS NOT BOOOLEAN
    // return "OKAY";
    
    return isPaid;
}

console.log(customer("atharva","a@a.com"));

export {};