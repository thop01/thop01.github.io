console.log("main is laoded");
const actionButton = document.querySelector(".action-btn");
const userInput = document.querySelector(".user-input");
const appsLink = document.querySelector(".link-apps");
const slider = document.querySelector(".colorSlider");
if(slider){
    slider.addEventListener("change", (e) => {    
        document.documentElement.style.setProperty('--mainColor', slider.value);
    });
}
document.body.addEventListener("click", (e)=>{
    if(!e.target.classList.contains("link-apps")){
        const applist = document.querySelector(".apps-list");
        applist.classList.add("hide");
    }
});

actionButton.addEventListener("click", action);
userInput.addEventListener("keypress", onKeyDown);
appsLink.addEventListener("click", toggleAppList);
    


function action(){
    const resultView = document.querySelector(".result")
    let result = `U zocht op: "${userInput.value}", maar ik weet niet wat u probeert te vinden. `
    switch(userInput.value){
        case "123": 
        case "234":
            case "345":
                case "456":
                    case "567":
                        case "678":
                            case "789":
            const color = Number(userInput.value);
            resultView.textContent = "Kleur is veranderd";
            document.documentElement.style.setProperty('--mainColor', color);
            break;
        default:
            document.querySelector("h1").textContent = userInput.value;
            resultView.textContent = result;

    }
    

    // if ochtend...
    userInput.value = "";
    setTimeout(()=>{
        resultView.textContent = ""   
    }, 1500);
    const applist = document.querySelector(".apps-list");
    applist.classList.add("hide");
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

