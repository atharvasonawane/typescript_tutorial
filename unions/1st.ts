
let id : number | string = 45;

id = 30;
console.log(id);
id = "thirty"
console.log(id);

type User = {
    name: string;
    id : number;
}

type Admin  = {
    username:string
    id : number;
}

let atharva: User | Admin  = { name:"something", id:34}

atharva = {username:"random",  id: 34}
console.log(atharva);

export {}