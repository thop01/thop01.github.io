const button = document.querySelector(".generate");
let index = 0;

button.addEventListener("click", showQoute);

const qoutes = [
    {
        qoute: "Your time is limited, so don't waste it living someone else's life",
        author: "Steve Jobs",    
    },
    {
        qoute:  "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        qoute: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
];
showQoute();


function showQoute(){
    const qouteView = document.querySelector("p.qoute");
    const randomNumber = Math.floor(Math.random()*qoutes.length);
    qouteView.textContent = qoutes[randomNumber].qoute;
}

const prevButton = document.querySelector("button.prev");
const nextButton = document.querySelector("button.next");
prevButton.addEventListener("click", showPrev);
nextButton.addEventListener("click", showNext);

function showPrev(){
    console.log('showPrev');
    index = index - 1;
    if(index < 0){
        index = qoutes.length-1;
    }
    const qouteView = document.querySelector("p.qoute");
    qouteView.textContent = qoutes[index].qoute;
}
function showNext(){
    console.log('showNext');
    index = index + 1;
    if(index > qoutes.length-1){
        index = 0;
    }
    const qouteView = document.querySelector("p.qoute");
    qouteView.textContent = qoutes[index].qoute;
}
