// const --> cannot be changed
// var --> generally not used. Not block scoped, can be accessed from anywhere
// let --> block scoped, available only inside the function

const accountId = 144553
let accountEmail =  "xyz@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState   // value is "undefined"

// accountId = 2  "Not Allowed"

accountEmail = "hc@hc.com"
accountPassword = "2121245"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  // Displays items in a tabular format