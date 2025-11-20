// toString --> converts the number to string
// toFixed --> gives digits in decimal places
// toPrecision --> gives precise value on the basis of defined number
// toLocaleString --> adds comma in digits

// abs --> converts negative value to positive 
// round --> rounds off the value
// ceil --> always displays the top value. 3.2 -> 4
// floor --> always displays the bottom value. 3.9 -> 3
// min --> minimum values
// max --> maximum values
// random --> gives random integer between 0-1

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal place

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); 

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));


// ******************** Maths ***********************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(3.9));
console.log(Math.min(3,4,8,1));
console.log(Math.max(3,4,8,1));

console.log(Math.random());
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);
