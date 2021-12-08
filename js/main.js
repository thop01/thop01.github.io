console.log("main is laoded");
let color = 210;
color = ((new Date().getHours() * 60 + new Date().getMinutes()) / 4).toFixed();
console.log(`The color is ${color}`);
document.documentElement.style.setProperty('--mainColor', color);
const actionButton = document.querySelector(".action-btn");
const userInput = document.querySelector(".user-input");
const appsLink = document.querySelector(".link-apps");
const profileLink = document.querySelector(".link-profile");
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
// userInput.addEventListener("keypress", onKeyDown);
appsLink.addEventListener("click", toggleAppList);
profileLink.addEventListener("click", toggleHideProfile);
let mousedown = false;
document.querySelector(".sidebar").addEventListener("mousedown", (e)=>{
    mousedown = true;
});
document.querySelector(".sidebar").addEventListener("mouseup", (e)=>{
    mousedown= false;
    });
    document.querySelector(".sidebar").addEventListener("mousemove", (e)=>{
        if(mousedown){
            console.log(e);
            document.querySelector(".sidebar").style.width = e.screenX + "px";
        }
     
    });

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
        case "profile":
            document.querySelector(".profile").classList.toggle("hide");
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

// function onKeyDown(e){
//     console.log(e);
//     console.log("test")
//     if(e.key == "Enter"){
       
//     }
// }


function toggleAppList(e){

    const applist = document.querySelector(".apps-list");
    applist.classList.toggle("hide");

}


function toggleHideProfile(e){
    const profile = document.querySelector(".profile");
    profile.classList.toggle("hide");

}


function openCloseAppList(e){
    console.log(e);
}


document.body.addEventListener("mousemove", (e)=>{
    const bg = document.querySelector(".bg");
    bg.style.left = `${e.x-500}px`;
    bg.style.top = `${e.y-500}px`;
});

