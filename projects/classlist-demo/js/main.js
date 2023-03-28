const button = document.querySelector("div.box1");
const button2 = document.querySelector("div.box2");
const button3 = document.querySelector("div.box3");


button.addEventListener("click", doSomething);
button2.addEventListener("click", removeColor);
button3.addEventListener("click", toggle);
function doSomething(){
    const box2Element = document.querySelector("div.box2"); 
    box2Element.classList.add("green");
}

function removeColor(){
    const box2Element = document.querySelector("div.box2"); 
    box2Element.classList.remove("green");
}

function toggle(){
    const box6Element = document.querySelector("div.box6"); 
    box6Element.classList.toggle("warning");
}