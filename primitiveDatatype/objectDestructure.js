//object destructuring

const course={
    coureName:"JavaScript",
    price:1234,
    instructor:"Noman Khan"

}
// not use this and to overcome this use destructuring
// course.coureName
// course.price
const{coureName}=course
console.log(coureName);//JavaScript
//change name of key
const{coureName:course1}=course
console.log(course1);//JavaScript

//example of react
// nav(props.name) not use this ....operator use destructuring
// const nav=({name})=>{
// }
// nav(name="Noman")

//====================API====================
//random user me api for free APIs
//json formatter convert APIs into different tree
