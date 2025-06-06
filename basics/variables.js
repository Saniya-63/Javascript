const accountId = 101               //cannot be changed
let accountEmail = "saniya@gmai.com"  
var accountPassword = 12345         
accountCity = "Pune"

// accountId = 100      not allowed const variable cannot be changed 

accountEmail = "abc@gmail.com"
accountPassword = "123"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity])
/*
prefer not to use var
because of issue  in block scope and functional scope 
*/