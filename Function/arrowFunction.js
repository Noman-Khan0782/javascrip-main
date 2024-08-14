// using this key word 
const user={
    userName:"Noman khan",
    id:123,
    email:"noman234@gmail.com",
    welcomeMessage: function(){
        // console.log(userName);//not print userName value because we not use this
        //key word
        console.log(this.userName);
        
    }
    
}
user.welcomeMessage()
user.userName="tahmeed";
user.welcomeMessage()
console.log(this.userName);

//========================arrowFunction=========================\
const chai =  () => {
    let username = "Noman"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Noman"})

console.log(addTwo(3, 4))


