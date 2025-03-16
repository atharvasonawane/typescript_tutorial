// TUPLES

// WE DONT HAVE ANY RESTRICTION IN THE ARRAYS
// fo ex: we can put number,string or any value at any position
const user: (string | number)[] = [1,"as"];


// but in tuple we have restrictions
let tUser: [string,number,boolean];
tUser = ["as",123,true];
console.log(tUser);
// if the above array is not in sequence as decalred then it will give error;



export{};