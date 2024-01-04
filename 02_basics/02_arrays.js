const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) // or const all_heroes= marvel_heroes.concat(dc_heroes)
const all_new_heroes= [... marvel_heroes,...dc_heroes]
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][2])
console.log(all_new_heroes)

console.log(Array.from("gautam"))
//another method is flat google it it ust give all array elemetns in a single array
let score1 = 100
let score2= 200
let scoe =300

console.log(Array.of(score1,scoe,score2))