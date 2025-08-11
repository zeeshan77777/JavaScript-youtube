const accountId = 123
let accountName = "Zeeshan"
var accountEmail = "zeeshan.gmail.com"
accountCity = "Haripur"

// accountId = 2
console.log(accountId);

accountName = "Anis"
accountEmail = "anis.gmail.com"
accountCity = "Rawalpindi"

/*
prefer not to user var because of issue in block scope and functional scope 
*/

console.table([accountId, accountName, accountEmail, accountCity])
