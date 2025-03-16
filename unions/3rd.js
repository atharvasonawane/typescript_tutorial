var data1 = [1, 2, 3];
// NOT POSSIBLE BOTH NUMBER AND STRING
var data2 = [1, 2, 4, "five"];
// POSSIBLE IN THIS WAY
var data3 = [1, 2, "three", true];
console.group(data3);
// ALSO CUSTOMIZED DATA CAN BE ALSO USED IN UNIONS
var seatAllotment;
// NOT POSSIBLE
seatAllotment = "crew";
