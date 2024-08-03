//date

const myDate=new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

//create date
const creatDate=new Date(2024,2,4) // month start from zero index
console.log(creatDate.toDateString());

console.log("====================Time==================");
const d = new Date();
// let time = d.getTime();
console.log(`The time is : ${d.toLocaleTimeString()}`);//The time is : 1:15:14 AM

// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Time with a year
// const d = new Date();
// let years = Math.round(time/ year);

console.log(d.toLocaleTimeString());
console.log(`The year is : ${d.getFullYear()}`);
console.log(`the month is : ${d.getMonth()}`);
console.log(d.getDate()); // 4
  console.log(d.getHours());// current hour
 console.log(d.getMinutes()); // current minute
console.log(d.getSeconds()); // current second
console.log(d.getMilliseconds());// current millisecond














