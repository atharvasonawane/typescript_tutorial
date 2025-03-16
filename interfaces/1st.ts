
// INTERFACES

interface User {
    readonly _id:number,
    email:string,
    googleId?: string,

    trial():string,
    getcoupon(name:string, value:number): number
}

const atharva: User = {_id:44, email:"a@a",
    trial: () => { return "hello" },

    getcoupon: (name:string,value:number) => { return value}
}

console.log(atharva);
console.log(atharva.getcoupon("ath", 33));

export{}