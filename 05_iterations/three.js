//for of

//["" , '', '']

const arr =[12,3,1,2,1,2,11,2,1,2]
for (const num of arr) {
    console.log(num)
}

const greetings="hello world"
for(const g of greetings){
    console.log(`greeting ${g}`)
}

// Maps

const map= new Map()
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"france")
console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value)
}


// for of will not work in iteration of object

const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:" swift by apple"
}

for( const key in myobj){
    console.log(`${key} shortcutt is for ${myobj[key]}`)
}


// for in me hum key nikalte hain array k case m 0,1 etc aur for of me hum values nikalte h


//foreach

const coding=["js","ruby","java","python","java","cpp"]

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})