function goToFreepik(){
    location.href = 'https://www.freepik.com';
}

function doSomething(){
    const inputValue = document.querySelector(".in").value;
    console.log("Inputvalue: " + inputValue);
    const resultElement = document.querySelector(".result");
    resultElement.textContent = inputValue;
}


let player1 = "";
let player2= "";

function play(){
    const players = document.querySelectorAll(".playername");
    console.log(players);
    player1 = players[0].value;
    player2 = players[1].value;
    console.log(player1);
    console.log(player2);
    const resultElement = document.querySelector(".result");
    resultElement.textContent = player1 + " VS " + player2;
    
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
     location.href = "bke.html";
}


const button = document.querySelector(".play-btn");
button.addEventListener('click', play);



// document.addEventListener('click', goToFreepik);