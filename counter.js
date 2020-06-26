const countNumber = document.querySelector('.countNum');
const plusCount   = document.querySelector('#plus');
const minusCount  = document.querySelector('#minus');
var i=0;

plusCount.addEventListener('click', increment);
minusCount.addEventListener('click', decrement);

function increment(){
    
    i++;
    countNumber.innerHTML = i; 
if(i == 0){
        countNumber.style.color = "white";
    }else if(i < 0){
        countNumber.style.color = "red";
    }else{
        countNumber.style.color = "rgb(147, 245, 122)";
    }
    countNumber.animate([{opacity: "0.2"},{opacity: "1.0"}],1000);
} 

function decrement(){
    
    i--;
    countNumber.innerHTML = i;
    if(i == 0){
        countNumber.style.color = "white";
    }else if(i < 0){
        countNumber.style.color = "red";
    }else{
        countNumber.style.color = "rgb(147, 245, 122)";
    }
    countNumber.animate([{opacity: "0.2"},{opacity: "1.0"}],1000);
} 
