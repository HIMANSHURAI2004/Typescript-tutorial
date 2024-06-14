//Object
const User = {
    name: "Himanshu",
    email: "himanshu@gmail.com",
    isActive: "true"
}

function createUser({name:string,isPaid:boolean}){}

createUser({name:"himanshu",isPaid:false})

let user = {name:"himanshu",isPaid:false,email :"h@h.com"}

createUser(user)//bad begavior of ts as an extra email is taking as an input 


function createCourse():{name : string, price : number}{
    return {name: "typescript" , price : 1000}
}

//type
type User ={
    name:string
    email:string
    isActive:boolean
}

function createuser(user: User): User{
    return {name: "",email:"",isActive:false}
}

createuser({name: "",email:"",isActive:false})

// Readonly and optional
type newUser ={
    readonly _id: string
    name:string
    email:string
    isActive:boolean
    credcardDetails?: number
}

let myUser : newUser={
    _id:"1234",
    name:"Himanshu",
    email:"h@h.com",
    isActive:true
}

myUser.name= "Arun"
// myUser._id="124342"


type cardNumber = {
    cardNumber:string
}
type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    ccv:number
}



export {}