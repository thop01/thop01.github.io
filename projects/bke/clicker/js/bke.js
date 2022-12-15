console.log('loaded');
const player1 = localStorage.getItem("player1");
const player2 = localStorage.getItem("player2");
console.log(player1);
console.log(player2);
const h1 = document.querySelector("h1");
h1.textContent = player1 + " VS " + player2;



let turn = "X";

function onTileClick(event){
    console.log(event.target);
    if(event.target.textContent == ""){
        event.target.textContent = turn;
        if(turn == "X"){
            turn = "O";
        }else{
            turn = "X";
        }

        const i1 = document.querySelector(".tile1");
        const i2 = document.querySelector(".tile2");
        const i3 = document.querySelector(".tile3");
        if(i1.textContent == "X" && i2.textContent == "X"){
            alert("x heeft gewonnen");
        }else if(i1.textContent == "O" && i2.textContent == "O"){
            alert("O heeft gewonnen");
        }

    }
}

const tiles = document.querySelectorAll(".tile");


for(let i = 0; i < tiles.length; i ++){
    tiles[i].addEventListener("click", onTileClick);
}




