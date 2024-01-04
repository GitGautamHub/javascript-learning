// Dates

let myDate = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString('en-IN'))
console.log(typeof myDate)

let myCreateDate = new Date(2023,0,23);//month start with 0 as jan
console.log(myCreateDate.toString())


let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myDate.getTime())
console.log(Math.floor(Date.now()/1000))
console.log(myDate.getMonth()) //0 as month is jan when i was doing this 

console.log(myDate.toLocaleString("default",{
    weekday:"long",
}))  // thursday
