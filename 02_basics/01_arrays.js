// array

const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]
const myHeroes = ['shaktiman', 'ironman']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(24) // inserts element at the start of the array
myArr.shift() // acts like pop but pops the first element

console.log(myArr.includes(24)); // finds a particular value and returns output in bool
console.log(myArr.indexOf(24));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof myArr);
console.log(newArr);
console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // in slice the end is not included 
console.log(myn1);

console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice manipulates the actual array by removing the range from it.
console.log("C ", myArr);
console.log(myn2);
