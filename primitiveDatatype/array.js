// Aarray

const { log } = require("console");

const array = [1, 2, 3, 45];
const array2 = ["noman", "junaid"];

const newArray = new Array(1, 2, 3, 4, 5);

// console.table([array,array2,newArray]);
console.log(array);
console.log(array2);
console.log(newArray);

//push method
array.push(23, 50); //[ 1, 2, 3, 45, 23, 50 ]
console.log(array);

//pop method
array.pop(); // [ 1, 2, 3, 45, 23 ] delete last element 50
console.log(array);
// array.pop(2);// not take value
// console.log(array);

// unshift method
array.unshift(12); // [ 12, 1, 2, 3, 45, 23, 50 ]

console.log(array);

//shift method
array.shift(); //[ 1, 2, 3, 45, 23 ] delet first element
console.log(array);

console.log(array.includes(9)); //false 9 not present in array
console.log(array.indexOf(1)); //0

//join method

// const myArray= array.join(); // convert to string
// console.log(myArray); //1,2,3,45,23
// console.log(typeof myArray); // string
console.log("concat method");
 
console.log(array.concat(array2));
// const concatArray= array.concat(array2); //combine to array
// console.log(concatArray);
console.log("A", array);
//Slice AND splice

// console.log(`the slice of array is :${array.slice(0, 3)}`);
// console.log(`the splice of array is :${array.splice(0, 3)}`);
// console.log(array.splice(0,3));
const newArray2=[9,8,7,6,5]
console.log(newArray2.splice(1,4)); //include last index
console.log(newArray2.slice(0,3)); //not include last index
//find
const findArray=[1,2,3,4,2]; 
let d=findArray.find((num)=>num % 2===0);
console.log(d); //2
//filter
const findArray1=[1,2,3,4,2];
let d1=findArray1.filter((num)=>num % 2===0);
console.log(d1);// [ 2, 4, 2 ]
console.log(typeof d);

//map and foreach
console.log("============Map");
// let map1=[1,2,3,4]
// let newmap=map1.map((e)=> e*2); //Argument
// console.log(newmap);

console.log("============foreach==");
let map1=[1,2,3,4]
map1.forEach((e)=>{
    console.log(e*2);    
}); //Argument
console.log(map1);








