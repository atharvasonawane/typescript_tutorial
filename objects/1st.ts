
// Bad behaviour of objects

const User = {
    name:"Atharva",
    id:4,
    isActive:true
};


// ALLOWED
function createUser({name:string, isActive:boolean}){
}

const result = createUser(User);



// NOT ALLOWED
const extraUser = {name:"Atharva", roll:45}

function newUser({name:string, isActive:boolean, id:number}){
}

const newResult = newUser(extraUser);

export {}