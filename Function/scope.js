//scope global scope and block scope\

if (true)
{
    let a = 4;
    var b = 3;
    const c = 4;
    console.log("-===========");
    console.log(a);
    console.log(c);
    function checkscope(){
       
    }
}
// console.log(a);//error not define because of global scope
console.log(b);
// console.log(c);//error not define because of global scope
checkscope()

//=============nested Scope=================
function one(){
    const userName="Noman Khan"

function two(){
      const anothername="tahmeed"
       console.log(userName);
       
}
two()
// console.log(anothername); //error not call in global scope

}
one()
//task nested scope using if else condition
if(true){
    const firstname="Noman"
    if(firstname ==="Noman")
    {
        console.log(firstname);
        const lastName="Khan"
    }
    // console.log(lastName); //error due to scope
    
}
// console.log(firstname); //error due to scope


//================intresting topic=============
console.log("========expresion vs decleration");
// decleration
function name1(){
    console.log("5");
}
name1()
//expresion  store function in variable in javascript variable is very powerful
// let name2 =function(){
//     console.log("5");
// }
// name2()

// =============problem================
//name2()//error in expression we cannot call fuction on the top but problem in decleration
let name2 =function(){  //it is clear in the concept called hoisting
    console.log("5");
}
// decleration
name1()
function name1(){
    console.log("5");
}

