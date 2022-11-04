function toggle() {
    const game = document.getElementById('game')
    game.classList.toggle('active')
    const lock = document.getElementById('lock')
    lock.classList.toggle('disable')
}
// levl1
let X = (Math.floor(Math.random() * 100))
let Y = (Math.floor(Math.random() * 100))
console.log(X);
document.getElementById('num1').innerHTML += X;
document.getElementById('num2').innerHTML += Y;
let result = X + Y;




const user = document.getElementById('user')
user.addEventListener('click', ansrCilcked)

function ansrCilcked() {
    let userInput = prompt(`wat is het antwoord?`)
    const continuousBtn = document.getElementById('continuousBtn');
    const user = document.getElementById('user');
    const ansr = document.getElementById('ansr');
    if (userInput == result) {
        ansr.classList.add('active')
        continuousBtn.classList.add('active')
        user.classList.add('disable')
        document.getElementById('ansr').innerHTML = `jouw antwoord is goed `
    } else {
        ansr.classList.add('active')
        document.getElementById('ansr').innerHTML = `jouw antwoord is fout `
        document.getElementById('user').innerHTML = `Opnieuw`

    }

};