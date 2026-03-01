const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity ="Jaipur"   // not use this way
let accountState = "Rajasthan";

// accountId = 2
accountEmail = "hc@hc.com"
accountPassword = 212131
accountCity = " Haryana"
console.log(accountId);
/*
prefer npt use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])