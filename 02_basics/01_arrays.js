//array 

const myArr = [ 0,1,23,1,2,11,2,3,21,2,1,12,11,"true","hitesh",false]

// js arrays are resizable 
const myHeroes=["shaktiman","naagraj"]
console.log(myHeroes)
console.log(myArr[1])

//Array methods
//push
myArr.push(44)
console.log(myArr)
myArr.pop()//removes last element prom array
console.log(myArr)

//to start at beginning
//use unshift(number to be added at beginning)
// use shift(number to be deleted from beginning)

const newArr = myArr.join()

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

console.log(newArr)
console.log(typeof newArr)

console.log(myArr.slice(1,3))
console.log(myArr.splice(1,3))
console.log(myArr)


// main differnece between slice and splice is slice displays the element given in range
// but splice deletes and display the element in range and also invlude the upper limit in it