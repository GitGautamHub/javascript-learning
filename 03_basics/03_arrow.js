const user ={
    username:"gautam",
    price:999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage() // if we not use this this then it will show error as username will not be accesed in function

// console.log(this)  //{}

// this only used in objects and not for function
const chai= () => { 
    console.log(this)
}
// chai()

// const addTwo= (num1,num2)=>{
//     return num1+num2
// }

// in arrow function if we dont use curly brackets and sues normal parenthesis then we dont have write return it will automatically return
const addTwo =(num1,num2)=>(num1+num2) // for returning object we have to use curly brackets
console.log(addTwo(3,4))