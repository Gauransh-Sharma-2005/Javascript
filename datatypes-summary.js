// on the basis of how data is stored in memory and accesed, data is categorized in two types
// Primitive and Non-Primitive (reference type)

// primitive types are call by value, reference of the value is not given only the copy is given
// Symbol --> used to make a value 'unique', returned datatype is also 'symbol'

// result of (typeof null) is 'object' as it represents the intentional absence of any object value, not an object itself.

//**************************** PRIMITIVE ***************************
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.44

const isLoggedIn = true
const outsideTemp = null // (empty)
let userEmail; // (undefined)

const id = Symbol('123')
const anotherId = Symbol('123')  // although the values are same, the two variables are not similar

console.log(id === anotherId); // false

const bigNumber = 2425523646256266587267628765826582587628756n  // BigInt 


//**************************** Reference type/ Non-Primitive type */ *******************************
// Array, Objects, Functions

// return type of all the non-primitive data types is 'object'

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
  name: "harsh",
  age: 22,
}

const myFunction = function(){
  console.log("Hello World");
}

console.log(typeof score); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); //bigint
console.log(typeof null); // object

console.log(typeof heroes); //object
console.log(typeof myObj); // object
console.log(typeof myFunction); // result is 'function', but it is actually called 'object function'

