const name="Manya"
const repocount=50

// console.log(name+repocount+"Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); //with backticks we can do string interpolation

const gamename=new String('manya-fleet')
// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(5));
// console.log(gamename.indexOf('f'));

const newString=gamename.substring(0,4);
console.log(newString);

const anotherstring=gamename.slice(-8,4);//we can also give -ve values in slice
console.log(anotherstring);

const newstring1="      manya      "
console.log(newstring1);
console.log(newstring1.trim()); //read about trim in documentation

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));

console.log(gamename.split('-'));