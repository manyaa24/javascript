const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); //gives array in a array
// console.log(marvel_heroes[3]);

// const all_heroes=marvel_heroes.concat(dc_heroes) //actually merges
// console.log(all_heroes);

const all_new_heroes=[...marvel_heroes,...dc_heroes] //spread operator
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);




console.log(Array.isArray("Manya"));
console.log(Array.from("Manya"));
console.log(Array.from({name:"Manya"})); //interesting

let score1=100;
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
