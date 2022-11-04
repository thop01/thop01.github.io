
// const 
// textbalk.addEventListener("keydown", myFunction);

document.body.addEventListener("keydown", myFunction);

function myFunction(event){

    console.log(event);
    if(event.key == "Enter"){
        const inputElement = document.querySelector (".text1");
        const inhoud = inputElement.value;
        if(inhoud == "112"){
            window.location.href = "spel3.html"
        }else{
            alert("Helaas, probeer het opnieuw");
        }
        console.log(inhoud);
    }

    const btn = document.querySelector(".hit");
const answer = "rudolf"
btn.addEventListener("click", myFunction);
function myFunction(){
    const inputfield = document.querySelector(".user").value;  
    if(answer == inputfield){
        window.location.href = "spel2.html";
    }
    else {
        const resultView = document.querySelector(".results")
        resultView.innerHTML += "FOUT!"
    }
}

    // const answer = ;
    // if( answer == 112) {
    //     alert("you are correct!")
    // }
    // else {
    //     alert("you are wrong, try again.")
    // }

   }
