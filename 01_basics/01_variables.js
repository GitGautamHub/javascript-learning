const accountId = 14453
let accountEmail= "gauatmk8760@gmail.com"
var accountPassword="12345"
accountCity="jaipur"

let accountState
// to declare variable we sue var and let 
/*
prefer not to use var because of issue in block scope and functional scope 

if we just declare the variable then defined value is undefined

with the help of console.table([]) we acn print multiple things in one go and without loop

*/

// accountId=2

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])