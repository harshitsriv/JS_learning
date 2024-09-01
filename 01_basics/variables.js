const accountId = 1233445 //cannot be changed

// can be changed
let accountEmail = "harshit@gmail.com" 
var accountPassword = "125424656" // problem of block and functional scope is there in var as global changes are made; Prefer not to use
accountCity = "Lucknow"  // can be used but not preferred
let accountState; // stored as 'undefined'

//accountId = 12355562 // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "32434531"
accountCity = "Noida"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])