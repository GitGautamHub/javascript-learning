const email=""
if(email){
    console.log("got user email")
}
else{
    console.log("dont have user email");
}


// falsy value means kin kinko false assume kiya jata h
// thesea re falsy values=> false, 0,-0,BigInt,"",null,undefined,Nan 

// truthy values
// "0" ,"false"," ",[],{},function(){},



// Nullish Coalescing operator (??): null undefined

let val1;
// val1=5 ??10  //5
// val1=null ?? 10//10
// val1=undefined??30  //30
// val1=null?? 10??20  //10

console.log(val1)


//Terniary operator

// condition ? true :false

const isTeaPrice=100
isTeaPrice > 40 ? console.log("tea is expensive") : console.log("tea is not expensive")