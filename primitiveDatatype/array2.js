// more methods

let array1=["Noman","yaseen","tahmeed"]
let array2=[1,2,3,4]

// array1.push(array2)
//console.log(array1); //[ 'Noman', 'yaseen', 'tahmeed', [ 1, 2, 3, 4 ] ] problem

array1.concat(array2)
console.log(array1); //[ 'Noman', 'yaseen', 'tahmeed' ] print array1 
//beacuse concate create new array so it is stored in another varaible

let concatArray=array1.concat(array2);
console.log(concatArray);//[ 'Noman', 'yaseen', 'tahmeed', 1, 2, 3, 4 ]

//spread operator (...) same to concat

let spreadOperator=[...array1,...array2]
console.log(spreadOperator);//[ 'Noman', 'yaseen', 'tahmeed', 1, 2, 3, 4 ]

//flat method
let confusionArray=[1,2,3,[4,5],4,5,[8,[2,3],9,4]]
console.log(confusionArray);//[ 1, 2, 3, [ 4, 5 ], 4, 5, [ 8, [ 2, 3 ], 9, 4 ] ]
console.log(confusionArray.flat(1));// [ 1, 2, 3, 4, 5, 4, 5, 8, [ 2, 3 ], 9, 4 ]
console.log(confusionArray.flat(Infinity));

//isarray and from
console.log(Array.isArray("Noman")); //false
console.log(Array.isArray("[Noman]")); //false

console.log(Array.from("Noman"));//[ 'N', 'o', 'm', 'a', 'n' ]
console.log(Array.from({name:"Noman"}));//[] empty array

let v1=1;
let v2=3;
let v3=4;
console.log(Array.of(v1,v2,v3));
console.log(Array.of("Noman"));









