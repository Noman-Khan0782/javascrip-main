let score=33
let score2="Noman"
let nullvalue = null
let bol= true

// let {score}=req.body
console.log(typeof score);
console.log(typeof (score2));

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




