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


//+++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++


//Stack me primitive type use hoti hain
// heap me non primitive value jate hain

let myYoutubeName="hiteshchaudharydotcom"
let anotherName= myYoutubeName

console.log(anotherName)

let userOne ={
    name1:"heheh",
    age1:20
}

let userTwo=userOne;

userTwo.name1="maaya"
console.log(userTwo)
console.log(userOne)

