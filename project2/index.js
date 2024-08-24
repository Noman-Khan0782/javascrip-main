const form = document.querySelector("form");
// console.log(takeform);
// not working
// const height = parseInt(document.querySelector("#height").value);
// console.log(height);
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const guide = document.querySelector("#guide");
  console.log(result);
  

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid height ${weight}`;
  } 
     
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    //task
     if(bmi<18.6){
        guide.innerHTML=`<span> under weigh</span>`
    }
    else if(bmi>24.9){
     guide.innerHTML=`<span> over weigh</span>`
    }
    else if(bmi>18.6 && bmi<24.9){
        guide.innerHTML=`<span> Normal</span>`
       }
  }
  
});
