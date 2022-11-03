const screens = document.querySelectorAll(".screen");
let screenIndex = 0;
const zoomLevels = ["1", "1.1", "1.25", "1.5", "2"];
let zoomLevel = 2;
document.body.style.zoom = zoomLevels[zoomLevel];






//control
document.body.addEventListener("keyup", (event)=>{
    console.log(event.code)
   switch(event.code){
    case "Space":
        next();
        break;
    case "ArrowRight":
    case "KeyJ":
        next();
        break;
    case "ArrowLeft":
    case "KeyL":
        previous();
        break;
    case "Minus":
        zoomOut();
        break;
    case "Equal":
        zoomIn();
        break;
   }


});

function next(){
    console.log("next");
    if(++screenIndex == screens.length) screenIndex = screenIndex.length-1;
    screens[screenIndex].scrollIntoView({behavior: "smooth", inline: "nearest"});

}

function previous(){
    console.log("previous");
}

function zoomOut(){
    if(--zoomLevel == -1) zoomLevel = 0;
    document.body.style.zoom = zoomLevels[zoomLevel];
    screens[screenIndex].scrollIntoView({behavior: "smooth", inline: "nearest"});
    
}

function zoomIn(){
    if(++zoomLevel == zoomLevels.length) zoomLevel = zoomLevels.length-1;
    document.body.style.zoom = zoomLevels[zoomLevel];
    screens[screenIndex].scrollIntoView({behavior: "smooth", inline: "nearest"});
}




