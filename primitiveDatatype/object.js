//singleton object  : object made through constructor
//objects literals

Object.create; // singleton object
const mySym = Symbol("key1");

let user = {
  name: "Noman",
  lastName: "Khan",
  age: 23,
  mySym: "keyvalue",
  [mySym]: "keyvalue",
  city: "peshawar",
  isLogIn: false,
  lastLogInDay: ["Monday", "Tuesday", "Sunday"],
};

//access object data
console.log(user.name); //it is true but it is not a good way to access the value of object
//we can not access the "lastName" of the user object
console.log(user.lastName);
console.log(user["lastName"]);

console.log(user.mySym);
console.log(typeof user.mySym); // string syntex error in creating symbol in user object mySym:"keyvalue",
//it is not a true syntex the true syntex is [mySym]:"keyvalue",

//Access symbol
console.log(user[mySym]);
console.log(typeof user[mySym]);

//change the value of object
user.city = "islamabad"; //change the value of city
console.log(user.city);

//lock the object not change the value of object
// Object.freeze(user);
user.age = 28;

console.log(user.age); //23 old value
user.city = "peshawar";
console.log(user.city);
// console.log(user);

//made function with object
user.function1 = Function()
{
  console.log("Hello World");
}

// console.log(user.function1); //[Function: anonymous] function return type function not execute
//only give reference
// console.log(user.function1());

//create function reference the variable name of the above user object
function function2()
{
    console.log(`this is name : ${this.name}`);
    
}
function2.call(user);//Noman
function2(user);//undifine
function2.apply(user);//Noman



