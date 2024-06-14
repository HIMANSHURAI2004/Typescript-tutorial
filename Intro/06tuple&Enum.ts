// const user: (string | number)[] = [1, "hr"]
let User: [string, number, boolean]

User = ["himanshu", 11, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "e@h.com"]

newUser[1] = "hc.com"

newUser.push(1)


//enum
enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE






















export {}