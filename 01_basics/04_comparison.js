// equality check(==) and comparisons > < >= <= work differently.
// comparisons convert null to a number (0).

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1); // automatic type conversion
console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false in every case

// === (checks value as well as data type)

console.log("2" === 2); // false since data type is different
