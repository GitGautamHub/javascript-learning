// singleton

//object literals 
const mySym= Symbol("key1")
const jUser={
    name: "gautam",
    age:19,
    [mySym]:"mykey1",
    location:"delhi",
    isLoggedIn:true
}

console.log(jUser.age)
console.log(jUser["age"])
console.log(jUser[mySym])

jUser.name="heyyey"
// Object.freeze(jUser)// now you cant change values of object

console.log(jUser)

jUser.greeting=function(){
    console.log(`hello js user , ${this.name}`)
}

console.log(jUser.greeting)