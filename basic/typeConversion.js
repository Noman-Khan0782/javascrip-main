let score=33
let score2="Noman"
let nullvalue = null
let bol= true

// let {score}=req.body
console.log(typeof score);
console.log(typeof (score2));//method

let conversion = Number(score2)
console.log(typeof (score2));//type string mean convert
console.log(conversion);//NaN

let conversion2 = Number(nullvalue)
console.log(typeof (typeof conversion2));
console.log(conversion2);//0

let conversion3 = Number(bol)
console.log(conversion3);//1
// convert to boolean
let islogin=1
let convertBol= Boolean(islogin)
console.log(convertBol);

let islogout=0
let convertBol2= Boolean(islogout)
console.log(convertBol2);

let islogout2=""
let convertBol3=Boolean(islogout2)
console.log(convertBol3);

let islogin2="123"
let convertBol4=Boolean(islogin2)
console.log(convertBol4);

// conver number to string 


// ================operations===========================

console.log("================operations===========================");
let a="noman"
let b="khan"

console.log(a+b);

// complex

console.log(1 + "2");
console.log("1"+ 2);
console.log(1+1+"2");
console.log("1"+"1" + 2);
console.log("10"/"10");
console.log(1+2*2/4);
console.log((1+2)*(3/4));

console.log("======================tricky===========");
console.log(true);
console.log(+true);
console.log(-true);
console.log(+false);
console.log(+"");

console.log("+-======================prefix and postfix===========");
let num=11
num++
console.log(num);
let num2=11
++num2
console.log(num2);

