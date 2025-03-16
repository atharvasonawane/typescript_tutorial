
//WEIRD BEHAVIOUR OF TUPLE
let tUser: [string,number,boolean];
tUser = ["as",123,true];
console.log(tUser);

// SOMEHOW ALLOWED
tUser.push(4);
console.log(tUser);


// TUPLES IN 'type'
type User = [string,number];

const person : User = ["as",33]
person.push(22);
console.log(person);


// SOME SOLUTION I FOUND
const random: readonly [number] = [11] as const;
// random.push(44);                //NOT ALLOWED
console.log(random);

export{}