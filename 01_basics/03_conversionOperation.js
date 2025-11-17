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

// *************************OPERATIONS********************************

let value = 3
let negativeValue = -value
console.log(negativeValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 // concatenation of string
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // first is string, rest are also string
console.log(1 + 2 + "2"); 

console.log(3+4*5%3);

console.log(+true); 
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++; // postfix
++gameCounter // prefix
console.log(gameCounter);

