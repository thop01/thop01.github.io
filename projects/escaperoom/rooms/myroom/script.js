const slider = document.querySelector('.slider');

let currentNumber = 0;
slider.addEventListener("change", (event)=>{
    console.log(event.target.value);
    currentNumber = event.target.value;
    document.querySelector('.img-slot2').style.transform = `rotate(${currentNumber*9}deg)`;
});

setInterval(()=>{
    currentNumber++;
    document.querySelector('.img-slot2').style.transform = `rotate(-${currentNumber*9}deg)`;
},1000)