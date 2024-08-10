//singleton
const obj1 = new Object();
console.log(obj1);

const obj2 = {};
console.log(obj2);

//add value
obj2.id = "123";
obj2.name = "Noman";
obj2.login = false;
console.log(obj2);

//object in object
const userData = {
  email: "noman345@gmail.com",

  fullName: {
    userName: {
      firstname: "Noman",
      Lastname: "Khan",
    },
  },
};

console.log(userData.fullName);
console.log(userData.fullName.email); //undefine
console.log(userData.fullName.userName);
console.log(userData.fullName.userName.Lastname);
console.log(userData.fullName.email); //undefine
console.log(userData.email); //noman345@gmail.com

//combine two objects
const obj3 = {
  A: 1,
  B: 2,
};

const obj4={
    C:3,
    D:4,
}

//combine
obj5={obj3,obj4}
console.log(obj5);//{ obj3: { A: 1, B: 2 }, obj4: { C: 3, D: 4 } } problem
//another method
obj6= Object.assign(obj3,obj4)  //same
obj6= Object.assign({},obj3,obj4)//same

console.log(obj6);
// using spread operator
obj7={...obj3,...obj4} //this is very useful and important
console.log(obj7);

//how to access objects value in array (most of the time DataBase Array of object)
const array=[
    {
        id:1,
        name:"bilal"
    }, {
        id:2,
        name:"Noman"
    }
    , 
    {id:3,
        name:"Zeeshan"
    },
     { id:4,
        name:"Zubair"
    }
    
]
console.log(array[0].id);
console.log(array[1].id);

console.log(obj2);
// find the keys 
console.log(Object.keys(obj2));//[ 'id', 'name', 'login' ] arrays of keys now we use "map"
//perform different methods
console.log(Object.values(obj2));
console.log(Object.entries(obj2));//[ [ 'id', '123' ], [ 'name', 'Noman' ], [ 'login', false ] ]

// find value 

console.log(obj2.hasOwnProperty('name')); //true
console.log(obj2.hasOwnProperty('city')); //false


//in this we use only [] bracket not dot . operator
const braket={
    id:1,
    
}
let var1='id';
console.log(braket.var1);//undefined
console.log(braket[var1]);//1








