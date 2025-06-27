//for in used to iterate in objects
//it can be used to iterate others also

const myobject={
    js:'javascript',
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myobject) {
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming=["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(key); //for in gives keys only in arrays
    console.log(programming[key]);
}

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"united States of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for (const key in map) {
//   console.log(key); //this will give nothing as maps are not iterable
// }