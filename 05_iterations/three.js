//for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"united States of America")
map.set('Fr',"France")
map.set('IN',"India") //this is repeated so it will not get printed as it only stores unique key-value pairs

// console.log(map);

// for (const key of map) {
//     console.log(key); //this will print both key and value
// }

for (const [key, value] of map) {
    console.log(key, ':-', value); //here we did destructuring
}

const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}

for (const [key,value] of myObj) {
    console.log(key, ':-', value); //myObj is not iterable as maps are iterable like this but objects have diff ways
}