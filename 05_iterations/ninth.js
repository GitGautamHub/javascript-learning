//reduce 

const myNums=[1,2,3,4,5]
const intitialValue=0
const myTotal=myNums.reduce((acc,currval)=>{
console.log(`acc: ${acc} and currval: ${currval}`)
 return acc+currval},intitialValue)
console.log(myTotal)