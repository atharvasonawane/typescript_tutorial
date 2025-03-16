 
const data1: number[] = [1,2,3];

// NOT POSSIBLE BOTH NUMBER AND STRING
const data2: number[] | string = [1,2,4, "five"];

// POSSIBLE IN THIS WAY
const data3: (number | string | boolean)[] = [1,2,"three", true];

console.group(data3);

// ALSO CUSTOMIZED DATA CAN BE ALSO USED IN UNIONS
let seatAllotment: "aisle" | "middle" | "window"

// NOT POSSIBLE
seatAllotment = "crew"