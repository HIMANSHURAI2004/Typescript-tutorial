//function with num of any type
function addTwo(num){
    return num+2
}

// addTwo(4)
addTwo("5")

//function with num of type number
function addOne(num : number) : number
{
    return num + 1
}

addOne(4)


function getUpper(val:string):string{
    return val.toUpperCase()
}

getUpper("Himanshu")

function signUpUser(name:string,email:string,isAdmin:boolean){

}

signUpUser("Himanshu","himanshu@h.com",false)

let loginUser = (name : string,email:string,isAdmin:boolean = false) =>{}

loginUser("himanshu","h@h.com")


const getHello = (s:string) : string =>{
    return `Hello ${s}`
}

const heros = ["thor","spiderman","ironman"]
// const heros = [1,2,3]

heros.map((hero): string =>{
    return `hero is ${hero}`
})


function consoleError(errmsg : string) : never{
    throw new Error(errmsg);
}






export {}