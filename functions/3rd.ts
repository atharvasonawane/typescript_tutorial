
function fail(message:string) : never {
    throw new Error(message);
};

let msg = fail("Testing");
console.log(msg);

export{};