
// TYPE ALIASES AND ARRAYS

type User = {
    name:String,
    isActive : boolean
}

const info  : User[] = [];

info.push({name: "Atharva", isActive:true}, {name:"", isActive:false})
console.log(info);

