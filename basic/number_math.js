// const {log}=require('console');
const num1=123;

const secondNum=new Number(234);

console.log(secondNum);
console.log(typeof secondNum ); //object

console.log(num1) 
//different methods
console.log(secondNum.toString().length); //string
console.log(typeof secondNum);//object


console.log(secondNum.toFixed(2)); //234.00
console.log(typeof secondNum);//object

const thirdnumber=123.370;
// console.log(thirdnumber.toPrecision(2));
console.log(thirdnumber.toPrecision(3));
console.log(thirdnumber.toPrecision(4));

const forthnumber=100000000
console.log(forthnumber.toLocaleString('en-IN'));

//=====================Maths=========================
console.log("=====================Maths=========================");


// console.log(Math.abs(-8));//absolute conver negative num into positive
// console.log(Math.round(5.2)); //5
// console.log(Math.round(5.6)); //6
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.6)); //4

console.log("//========random===========");

console.log(Math.random());
const min=1;
const max=6;
console.log(Math.floor(Math.random()*(max - min +1)+min));


















