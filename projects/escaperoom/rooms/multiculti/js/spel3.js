const answer1 = 2;
const answer2 = 7;
const answer3 = 0;


const btn = document.querySelector(".button");
btn.addEventListener("click", checkAnswer);

function checkAnswer(){
    console.log("de functie check answer wordt nu aangeroepen");
    const value1 = document.querySelector(".input1").value;
    const value2 = document.querySelector(".input2").value;
    const value3 = document.querySelector(".input3").value;
    if (answer1 == value1, answer2 == value2, answer3 == value3){
        window.location.href = "end.html"
    }
    else {
        alert("FOUT!!")
    }
    



    
//     else if (answer2 == value2) {
//     }
//     else if (answer3 == value3) { 
//         window.location.href = "end.html"
//     }
//     else {
//         alert('Wrong answer');
//     }
}