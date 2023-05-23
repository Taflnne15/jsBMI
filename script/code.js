
let answer = (".output");
function Result(){
let height=parseInt(document.querySelector('#height').value);


let weight=parseInt( document.querySelector('#weight').value);
let bmi = (weight / ((height*height)/10000)).toFixed(2);
document.querySelector('.output').innerHTML=`${bmi}`;

if (bmi < 18.5){
    document.querySelector('.output').innerHTML=`Underweight ${bmi}`;
} else if (bmi > 18.5 && bmi <= 24.9)
    document.querySelector('.output').innerHTML=`Healthy ${bmi}`;
    else if (bmi >= 25 && bmi <= 29.9)
    document.querySelector('.output').innerHTML=`Overweight ${bmi}`;
    else if (bmi > 30)
    document.querySelector('.output').innerHTML=`Obese ${bmi}`;
}

document.querySelector(".btn_clear").
addEventListener("click", ()=>{
    let remove = weight.value; height.value;
    weight.value = "";
    height.value = "";
    document.querySelector('.output').innerHTML = "";
})