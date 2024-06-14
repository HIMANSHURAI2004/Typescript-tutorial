"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function with num of any type
function addTwo(num) {
    return num + 2;
}
// addTwo(4)
addTwo("5");
//function with num of type number
function addOne(num) {
    return num + 1;
}
addOne(4);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Himanshu");
function signUpUser(name, email, isAdmin) {
}
signUpUser("Himanshu", "himanshu@h.com", false);
var loginUser = function (name, email, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
};
loginUser("himanshu", "h@h.com");
var getHello = function (s) {
    return "Hello ".concat(s);
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    throw new Error(errmsg);
}
