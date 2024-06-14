"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Object
var User = {
    name: "Himanshu",
    email: "himanshu@gmail.com",
    isActive: "true"
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "himanshu", isPaid: false });
var user = { name: "himanshu", isPaid: false, email: "h@h.com" };
createUser(user); //bad begavior of ts as an extra email is taking as an input 
function createCourse() {
    return { name: "typescript", price: 1000 };
}
function createuser(user) {
    return { name: "", email: "", isActive: false };
}
createuser({ name: "", email: "", isActive: false });
var myUser = {
    _id: "1234",
    name: "Himanshu",
    email: "h@h.com",
    isActive: true
};
myUser.name = "Arun";
