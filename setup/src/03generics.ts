const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}


function identityThree<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    type: number
}

// identityThree<Bootle>({})

function getSearchproduct<T>(product: T[]): T {
    // do some database operations
    const myIndex = 3
    return product[myIndex]
}


const getMoreSearchproduct = <T,>(product: T[]): T => {
    //do some database operations
    const myIndex = 4
    return product[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}