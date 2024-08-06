
function Noman(){
    console.log("Noman");
    console.log("Noman");
    console.log("Noman");
    console.log("====================================");
}
// Noman //function reference
// Noman() // function call

// function addNum(num1,num2){
//     console.log(num1+num2);
// }
  // addNum()//NaN not pass 
// addNum(5,5)arguments

// function addNum(num1,num2){
//   console.log(num1+num2); 
// }
// addNum(5,5)//10
// const result= addNum(5,5)//undefined
// // console.log(result);//error not console the the return value darict
// console.log("result :",result); //undefined

function addNum(num1,num2){
    // const result=num1+num2; //also true
    return num1+num2 //simple way
    console.log("Noman")//not print because execution stop after return
}
const result = addNum(5,5)
 
console.log("result :",result);
console.log("================================");

function login(user){
    if(!user) //or if(user === undefined) but !user is easy way check both
    {
        console.log("please inter user");
        return //code not execute after return
    }
    return`${user} is just login`
}
// login();
// login("Noman") // function but not print value because it is not stored in Var.
console.log(login("Noman"));
console.log("====================");


//shoping card
// function calculatCardPrice(num){
//    return num
// }
// console.log(calculatCardPrice(200,300,400,500)); //print first aurgument

//print all aurguments using rest operator(...)
// function calculatCardPrice(...num){
//   return num
// }
// console.log(calculatCardPrice(200,300,400,500));//[ 200, 300, 400, 500 ]

// confusion
function calculatCardPrice(val,val2,...num){
  return num
}
console.log(calculatCardPrice(200,300,400,500));//[ 400, 500 ] 
//because val=200 and val2=300 and ...num=[400,500]

//=============================
//pass object in function
const user={
    name:"Noman",
    phone:"03139127273"
}
function detail(anyobj){ //we have pass any objects
    return `my name is ${anyobj.name} and my phone number is ${anyobj.phone}`
}

// console.log(detail(anyobj));//error pass object
console.log(detail(user));//pass object in argument

//direct pass object
console.log(detail({
  name:"Noman Khan",
   phone:"03139127273..."
}));

console.log("=========================");
//pass array in function same to pass object in function
const newArray=[1,2,3,4]
 function passArrar(arrayValue){
    return arrayValue[2]
 }
//  console.log(passArrar(arrayValue)); //error:arrayValue is not defined
 console.log(passArrar(newArray));//pass array not pass parameter
//  console.log(passArrar([1,2,3,4,5,6,7]));//3 because the 3 at index 2
 
 console.log("==========IIFE==============");
 (function(){
    console.log("DB connection");
 })();
 (function(name){
    console.log("DB connection",name);
 })("Noman")
 console.log("========================");
  function myFun(name="Noman"){
    console.log("My name is :"+name);
  }
  myFun();
  myFun("Khan");
  console.log("=====================");

  function numOne(num3){
    return num3;
  }
  let num4=0;
  function numTwo(numOne,num4){
    return numOne(num4);
    // console.log("The sum is"(numOne+num4));
  }
  console.log(numTwo(numOne,5));
  console.log(numTwo(numOne,5));
  console.log("==============");

  function khan(num4){
    return num4+=num4
  }

  console.log(khan(1));
  console.log(khan(1));

  // ======call===apply =====bind====
  function sayHello(message){
    console.log(`${message}, ${this.newname}`);
  }
  const person={newname:"khan"}
console.log(sayHello.call(person,'Hello'));
console.log(sayHello.apply(person,['Hello']));
const myFunc=sayHello.bind(person);
console.log(myFunc('Hello'));





