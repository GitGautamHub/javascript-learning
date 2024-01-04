const tinderUser ={} // non singleton objet
// const tinderUser= new Object() // singleton object

tinderUser.id="123abs"
tinderUser.name="gauatm"
tinderUser.isLoggedIn=true

console.log(tinderUser)

const regularuser ={
    fullname: {
        userFullname: {
            firstname:"gautam",
            lastname:"kuamr"
        }
    }
}
console.log(regularuser.fullname.userFullname.firstname)

const obj={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj,obj2}
// console.log(obj3)

// const obj3=Object.assign({},obj,obj2)
// console.log(obj3)

const obj3={...obj,...obj2}
console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
