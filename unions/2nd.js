function getDB(id) {
    console.log(id);
}
getDB(3);
getDB("three");
// IT will give error as the data can be of any type not only string
// function getData(data : number | string){
//     data.toLowerCase();
// }
// BUT it can be solved by following
function getNewData(data) {
    if (typeof data === "string") {
        data = data.toLowerCase();
    }
    console.log(typeof (data));
    console.log(data);
}
getNewData("MONGOdb");
