//  function functionname(){
//     define it
// }


function addTwoNumber(x,y){//x and y are parameters
    console.log(x+y);
}
addTwoNumber(10,20) // 10,20 are arguments

function fun2(x,y){
    return x+y
}
const var1= fun2(12,44)
console.log(var1)

function loginusermessage(username="sam"){
    return `${username} just logged in`
}


const message = loginusermessage() // if argument is not passed then undefined will be shown in function wherever parameter is used
console.log(message)



function calculateCartPrice(...num1){
    
    return num1
}

console.log(calculateCartPrice(200,300,500))
