// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('Pak', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Pak', "Pakistan")

// console.log(map);

//another way to create map
// const map = new Map([
//     ['Pak', "Pakistan"],
//     ['USA', "United States of America"]
//   ]);
  
//   console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

//task
const myObject = {  //object is not iteratable in this case 
    game1: 'NFS',
    game2: 'Spiderman'
}
//convert to array
const convertToarray = Object.entries(myObject)
console.log(convertToarray);

console.log(convertToarray.flat(Infinity));

for (const [key,value] of convertToarray) {
    console.log(key,":", value);
    
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }