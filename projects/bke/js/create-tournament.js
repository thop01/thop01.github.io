console.log('main is loaded')

const createButton = document.querySelector(".action-btn");
createButton.addEventListener("click", createTournament);

function createTournament(event){
    const rawData = document.querySelectorAll("input");
    const players = [];
    rawData.forEach((element,key,parent)=>{
        if(!element.checkValidity()){
            element.reportValidity();
            return;
        }
    });
    for(let i = 0; i < rawData.length; i = i + 2){
         console.log(rawData[i].value);
         console.log(rawData[i+1].value);
         players.push({name:rawData[i].value});
    }

}