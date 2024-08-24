// const body= document.querySelector("body")
const randomColor= function(){
    const hexa="0123456789ABCDF"
    let color="#"
    for(let i=0; i<6;i++){
        color += hexa[Math.round(Math.random()*16)];
    }
    return color;
}
let clearInter; //declear for clearInterval()
// console.log(randomColor());
const startChangingColor=function(){
    const changcolor=function(){
        document.body.style.backgroundColor= randomColor()
       }
       clearInter= setInterval(changcolor,1000)
   
  }
  const stopChangingColor=function(){
  clearInterval(clearInter)
  document.body.style.backgroundColor= "white"
  }

// take reference ""
document.getElementById("start").addEventListener('click',startChangingColor)
document.getElementById("stop").addEventListener('click',stopChangingColor)

