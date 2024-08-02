//premitive datatype 
// 7 types : String, Number , Boolean , undefined , symbol , bigInt

const { log } = require("console");

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

//======================================>
    // Stack memory(primitive Datatype)       Heap(Non primitive Datatype)
console.log("===========================================");

let Name="Noman";
let anothername= Name; //copy of Name variable is stored in anotherName
// console.log(anothername);
anothername="Junaid"; //change in copy of name variable
console.log(Name);//Noman
console.log(anothername); //junaid

let user ={
    studentId:1,
email:"noman4556@gmail.com",    
}

let anotherUser= user; // reference of user variable
console.log(anotherUser);

anotherUser.email="khan2324@gmail.com"; //change in main value because reference is same

console.log(user.email);      //khan2324@gmail.com
console.log(anotherUser.email);  //khan2324@gmail.com
