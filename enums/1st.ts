
// ALSO const enum SeatChoice{ } can be used;
enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 1,
    WINDOW,
    FOURTH
 }

let seat = SeatChoice.AISLE;
console.log(seat);


// NOTE const can be used before enum so that the "JS" code genrated will be simple and more readable
 export{}