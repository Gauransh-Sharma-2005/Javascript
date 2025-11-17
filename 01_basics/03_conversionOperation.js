// 33abc --> NaN
// null --> 0
// undefined --> NaN
// True --> 1, "string" --> True
// False --> 0, "" --> False
// Datatypes are used in first word upper case in the editor, but lower case in the terminal

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber); // NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
