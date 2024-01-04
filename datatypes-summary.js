//Primitive

// 7 types : String ,Number ,Bo0lean ,null ,undefined, Symbol,BigInt

const score= 100
const scoreValue=10.3

const isLoggedIn=false
const outsideTemp= null

let userEmail; // undefined

const id= Symbol('123');
const anotherId= Symbol('123')

console.log(id===anotherId) //will return false though same symbol is used it will identify uniquely

const bigNumber= 21333321111122222222222222221111111n



// Refernce type or non primitive type

// Array ,Objects,Functions

const heroes =["shaktiman","naagraj","doga"]

let myobj= {
    name: "gautam",
    age: 20
}

const myFunction=function(){
    console.log("hello world")
}

console.log( typeof myFunction) //function
console.log(typeof myobj)


