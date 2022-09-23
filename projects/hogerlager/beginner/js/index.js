// showIntroduction();
// askAge();
// beginGame();


// function showIntroduction(){
//     console.log("ja man");
// }















function sayHello(){
    alert("Hoi" +  prompt("wat is jou rol?","student"));
}









function startGame(){

let user;
let credits;
let counter = 0;

alert("Welkom bij de speel automaat. Hier kan je het spel Hoger Lager spelen");
alert(
`Het spel gaat alsvolgt. je gooit twee dobbelstenen \n
Je kiest of de bank hoger of lager gooit. 
heb je het goed? dan krijg je krijg je 2 credits. Heb je het fout dan verlies je 5 credits.
Bij gelijk spel verlies je 1 credit.
zijn je credits op dan eindigt het spel.
`);
const isWelcome = confirm("Je moet 18 jaar of ouder zijn. Ben je dat?");
if(isWelcome == false){
    alert("Sorry je bent niet welkom de browser wordt nu afgesloten. Klik op OK voor ja en annuleren voor nee");
    window.close();
}
user = prompt("Goed Hoe heet je?", "user2005");
alert(`Gefeliciteerd ${user}, U krijgt gratis 10 speel credit!`)
credits = 10;
let userAnswer = "  ";
while(credits > 0){
    counter++;
    let spelerDubbelStenen = [Math.floor(Math.random()*6+1), Math.floor(Math.random()*6+1)];
    userAnswer = "  ";
    while(userAnswer.localeCompare("H") && userAnswer.localeCompare("L")){     
        userAnswer = prompt(`U heeft gegooit met ${spelerDubbelStenen}. \n
        gooit de bank hoger of lager?\n
        Type H voor hoger en L voor lager`, "H");
        // if(spelerDubbelStenen[1] + spelerDubbelStenen[0] < 7){
        //     userAnswer = "H";
        // }
        // else{
        //     userAnswer = "L";
        // }
    }
    let bankDubbelStenen = [Math.floor(Math.random()*6+1), Math.floor(Math.random()*6+1)];
    alert(`De bank heeft twee dobbelstenen gegooid \n
    dobbelsteen 1: ${bankDubbelStenen[0]} \n
    dobbelsteen 2: ${bankDubbelStenen[1]}`);
    
    if(spelerDubbelStenen.reduce((partialSum, a) => partialSum + a, 0) == bankDubbelStenen.reduce((partialSum, a) => partialSum + a, 0)){
        credits--;
        alert(`het is gelijk spel! \n
        Je verliest 1 credit \n
        Je huidige credits is ${credits}
        `);
    }else if(userAnswer.localeCompare("H") == 0 && spelerDubbelStenen.reduce((partialSum, a) => partialSum + a, 0) < bankDubbelStenen.reduce((partialSum, a) => partialSum + a, 0)){
        credits += 2;
        alert(`Goed geraden! \n
        Je wint 3 credit \n3
        Je huidige credits is ${credits}
        `);
    }else if(userAnswer.localeCompare("H") == 0 && spelerDubbelStenen.reduce((partialSum, a) => partialSum + a, 0) > bankDubbelStenen.reduce((partialSum, a) => partialSum + a, 0)){
        credits = credits - 5;
        alert(`De bank heeft gewonnen \n
        Je verliest 5 credit \n
        Je huidige credits is ${credits}
        `);
    }else if(userAnswer.localeCompare("L") == 0 && spelerDubbelStenen.reduce((partialSum, a) => partialSum + a, 0) > bankDubbelStenen.reduce((partialSum, a) => partialSum + a, 0)){
        credits += 2;
        alert(`Goed geraden! \n
        Je wint 3 credit \n
        Je huidige credits is ${credits}
        `);
    }else if(userAnswer.localeCompare("L") == 0 && spelerDubbelStenen.reduce((partialSum, a) => partialSum + a, 0) < bankDubbelStenen.reduce((partialSum, a) => partialSum + a, 0)){
        credits = credits - 5;
        alert(`De bank heeft gewonnen \n
        Je verliest 5 credit \n
        Je huidige credits is ${credits}
        `);
    }
    console.log(credits);

}

alert(`Oops! helemaal geen credits meer. U score is van het gehele spel is ${counter}`);

}

startGame();