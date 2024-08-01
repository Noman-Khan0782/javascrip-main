//premitive datatype 
// 7 types : String, Number , Boolean , undefined , symbol , bigInt

const id= Symbol('123');
const anotherId= Symbol('123');
console.log(id == anotherId); //false

const bigInt= 1234456789n; //bigInt


//Non premitive datatypes
// Array, Object, Function

let Array=[1,2,3,5];
console.log(Array);

// const constArray=[1,2,3,5,6];
// let newArray=constArray=[1,2,4,5,68,9]
// console.log(newArray);


let obj= {
    name:"Noman",
    age : 24,
    city:"Peshawar",
}
console.log(obj);
function fun(){
    console.log("This is function");
}
fun();
// console.log(function1);     // ECMAScript 
//https://262.ecma-international.org/5.1/index.html?_gl=1*jp0hpd*_ga*NTgwNzc0NDA5LjE3MjIxNjM3Nzg.*_ga_TDCK4DWEPP*MTcyMjU0MzEyNS4zLjAuMTcyMjU0MzEyNS4wLjAuMA..
