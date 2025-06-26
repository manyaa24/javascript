const accountId=12345
let accountEmail="manyaraj2402@gmail.com"
var accountPassword="2345"
accountCity="Jaipur"
let accountState;

// accountId=2 //not allowed

accountEmail="gc@hc.com"
accountPassword="212121"
accountCity="Kolkata"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState] )

/*
prefer not to use var because of issue in block scope and functional scope
*/