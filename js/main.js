console.log("main is laoded");
const actionButton = document.querySelector(".action-btn");
const userInput = document.querySelector(".user-input");
const appsLink = document.querySelector(".link-apps");
actionButton.addEventListener("click", action);
userInput.addEventListener("keypress", onKeyDown);
appsLink.addEventListener("click", toggleAppList);
    


function action(){
    const resultView = document.querySelector(".result")
    let result = `U zocht op: "${userInput.value}", maar ik weet niet wat u probeerd te vinden. `
    const uur = Number(userInput.value);
    // if ochtend...
    resultView.textContent = result;
    userInput.value = ""
}

function onKeyDown(e){
    console.log(e)
    if(e.key == "Enter"){
        action();
    }
}


function toggleAppList(e){
    const applist = document.querySelector(".apps-list");
    applist.classList.toggle("hide");
}



function openCloseAppList(e){
    console.log(e);
}


document.body.addEventListener("mousemove", (e)=>{
    const bg = document.querySelector(".bg");
    bg.style.left = `${e.x-500}px`;
    bg.style.top = `${e.y-500}px`;
});