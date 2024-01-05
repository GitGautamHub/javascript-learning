if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a)//will show error as it is defined in local block
// console.log(b)//same as log a
// console.log(c)//will now show error and that is disadvantage of var that it consider every update value as global and creates confusion to programmer

function one(){
    const username ="gautam"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website) // will show error as website is defined in other block and b=cant access heree

    // two()
}

one()

if(true){
    const username="gautam"
    if(username==="gautam"){
        const website="youtube"
        console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)



// ++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++
addone(6)
function addone(num){
    return num+1
}

// addtwo(6) // error we camt call the function before declaration
const addtwo =function(num){ // declaring and calling in one line
    return num+2
}

const anme="gautam"
console.log(this.anme) //undefined

