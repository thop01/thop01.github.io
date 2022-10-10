
function getCardDeck(){
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    const figures = ["clubs", "diamonds", "spades", "hearts"];
    let deck = [];
    for(let i = 0; i < values.length;i++){
        const v = values[i];
        for(let y = 0; y < figures.length; y++ ){
            const f = figures[y];
             deck.push(`${v}_of_${f}.svg`);
        }
    }
     return deck;
}

function shuffle(deck) {
    let currentIndex = deck.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
  
    return deck;
  }


function showAllCards(cards){
    for(let card of cards){
        const img = document.createElement("img");
        img.src = "./img/cards/" + card;
        document.body.appendChild(img);
    }
}

function showAllCardsRandom(cards){
    let time = 300;
    for(let card of cards){

        setTimeout(()=>{
            const img = document.createElement("img");
            img.src = "./img/cards/" + card;
            img.style.position = "absolute";
            img.style.left = `${Math.random() * 1000}px`;
            img.style.top = `${Math.random() * 500}px`;
            img.style.transform = `rotate(${Math.random()*360}deg)`
            document.body.appendChild(img);
        }, time);
        time=time+50;
    }
}

function playerHit(){
    const card = deck.pop();
    playerHand.push(card);
    const playerHandEl = document.querySelector(".player-cards");
    const cardElement = document.createElement("img");
    cardElement.src = "img/cards/"+card;
    playerHandEl.appendChild(cardElement);
}


document.querySelector("button").addEventListener("click", ()=>{playerHit();})

let deck = getCardDeck();
deck = shuffle(deck); 
let playerHand = [];


console.log(deck);
// setInterval(()=>{showAllCardsRandom(deck)}, 1000);
// showAllCardsRandom(deck);