//Union - | 
let score: number | string = 11
score = 24
score = "54"


type user = {
    name: string;
    id: number
}

type admin = {
    username: string;
    id: number
}

let hitesh: user | admin = {name: "himanshu", id: 1}

hitesh = {username: "hc", id: 334}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }

getDbId(5)
getDbId("67")

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

//Array 
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "abc", 66, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "middle"
// seatAllotment = "crew"