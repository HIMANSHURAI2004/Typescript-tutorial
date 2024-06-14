//interface 
interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

//Inheritance
interface User {
    githubToken: string
}

//Extends
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const himanshu: Admin = { dbId: 1, email: "himanshu@h.com", userId: 22,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "himanshu1", off: 10) => {
    return 10
}
}
himanshu.email = "h@hc.com"
// hitesh.dbId = 33


export {}