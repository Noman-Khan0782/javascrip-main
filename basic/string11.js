// const {log}=require('console')
const Name = "Noman";
const value = 123;
// log(Name + value) //not good syntex

//please follow this syntex
// log(`My name is ${Name.toUpperCase()} and my id is ${value}`) // string interpolation it is good syntex

//Another way to declare string

const anotherString = new String("Uzair");
// console.log(anotherString);
// using different methods
console.log(anotherString[0]);
console.log(anotherString.charAt(3));
console.log(anotherString.length);
console.log(anotherString.toUpperCase());
console.log(anotherString.indexOf("a"));
// important method
/*
The substring() method swaps its two arguments 
if indexStart is greater than indexEnd , meaning that 
a string is still returned. The slice() method returns 
an empty string if this is the case.
*/
const newString = anotherString.substring(4, 1); //note: not include the last index value(3)
console.log(newString);
let sliceString = anotherString.slice(0, 3);
console.log(sliceString);
sliceString = anotherString.slice(4, 2);
console.log(sliceString);

//another important methods 
const string2= "    Noman     "
console.log(string2);
console.log(string2.trim()) //use in email input (space not required) etc.

const url= "www.https://google.com20%Noman"
console.log(url.replace('20%' ,'-')); //replace method
//for find value use include method
console.log(url.includes('Noman'));
//string convert to array
const anotherName="Noman"
console.log(anotherName.split('m'));






