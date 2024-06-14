//Union - | 
var score = 11;
score = 24;
score = "54";
var hitesh = { name: "himanshu", id: 1 };
hitesh = { username: "hc", id: 334 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(5);
getDbId("67");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//Array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "abc", 66, true];
var seatAllotment;
seatAllotment = "middle";
// seatAllotment = "crew"
