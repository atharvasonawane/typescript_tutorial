
// TYPE ALIASES

type Info = {
    name: String;
    id: number;
    isActive: boolean;
}

function createUser(user: Info):Info{
    return {name:user.name,id: 0 , isActive:false};
}

console.log(createUser({name:"Atharva", id:9, isActive:true}))


export {}
