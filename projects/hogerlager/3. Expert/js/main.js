
// The '>' is the child-selector: '.board > .field' selects all child elements with class 'field'
// from the parent element with class 'board'.
// The result is a list with all the fields on the board.
const fields = document.querySelectorAll('.board > .field');

// get the element of the reset button
const resetButton = document.querySelector(".reset-button");

// Task 1: 
// Add a click-event listener resetButton which uses the resetGame-function to reset the board.
resetButton.addEventListener("click", resetGame);

let lastClickedNumber = 0;

// Always start with a fresh new board
resetGame();

for(let i = 0; i < fields.length; i++) {
    const field = fields[i];

    // Loop through all fields and add a click-event listener to each of them.
    // The function that is called is the function 'onFieldClick', with 
    // two arguments: the field and the index number 'i'.
    field.addEventListener('click', function() {
        onFieldClick(field, i);
    })
}


function onFieldClick(field, clickedNumber) {
    // Task 2: set the right number on the clicked field (0 - 8)
    console.log("You have clicked " + clickedNumber);

    field.textContent = clickedNumber;

    if (lastClickedNumber < clickedNumber) {
        alert("Hoger dan de vorige!")
    } else if (lastClickedNumber > clickedNumber) {
        alert("Lager dan de vorige!")
    } else if (lastClickedNumber == clickedNumber){
        alert("Hetzelfde!")
    } else {
        alert("Error!")
    }

    lastClickedNumber = clickedNumber;
}

/*
* Task 3
* Give body to the resetGame function.
* Make sure this works: 
  -Set all fields to '?' except the first field.
  -Set first field to '0'.
  -Reset other data if needed.
*/
function resetGame() {
    console.log('Reset button clicked!');

    for(let i = 0; i < fields.length; i++) {
        let field = fields[i];

        if (i > 0) {
            field.innerHTML = "?";
        } else {
            field.innerHTML = "0";
        }
    }
}



