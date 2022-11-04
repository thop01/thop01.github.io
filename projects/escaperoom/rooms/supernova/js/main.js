// home page
// alert(`pls press F11 for a better viewing experience`)

const audio = document.getElementById('audio')
const playPauseBTn = document.getElementById('playPauseBTn')
let count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBTn.innerHTML = "&#x1f507;";
  } else {
    count = 0;
    audio.pause();
    playPauseBTn.innerHTML = "&#128264;";
  }
}

function checker() {
  let result = confirm(`Are you sure?`)
  if (result == false) {
    vent.preventDefault();
  }
}

const startBtn = document.getElementById('startBtn')
const test = document.querySelector('.homePageTxt')
startBtn.addEventListener('click', startBtnClicked)

function startBtnClicked() {
  test.classList.toggle('active')
}



// level 2

function des() {
  'use strict';
  document.getElementById('shot').play();
  document.getElementById('duck1').style.display = 'none'
  if (document.getElementById('duck1').style.display === 'none') {
    document.getElementById('a').style.display = 'inline-block'
    document.getElementById('a').innerHTML = "continuous";
  }
}

function lose() {
  document.getElementById('shot').play();
}

// level 2

//slide puzzle game//
///////////////////////////////////////////////////////////
function toggle() {
  const game = document.getElementById('game')
  game.classList.toggle('active')
  const lock = document.getElementById('lock')
  lock.classList.toggle('disable')
}

function swapTiles(cell1, cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
  //Use nested loops to access each cell of the 3x3 grid
  for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
    for (var column = 1; column <= 3; column++) { //For each column in this row

      var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
      var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

      swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
    }
  }
}

function clickTile(row, column) {
  var cell = document.getElementById("cell" + row + column);
  var tile = cell.className;
  if (tile != "tile9") {
    //Checking if white tile on the right
    if (column < 3) {
      if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
        swapTiles("cell" + row + column, "cell" + row + (column + 1));
        return;
      }
    }
    //Checking if white tile on the left
    if (column > 1) {
      if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
        swapTiles("cell" + row + column, "cell" + row + (column - 1));
        return;
      }
    }
    //Checking if white tile is above
    if (row > 1) {
      if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
        swapTiles("cell" + row + column, "cell" + (row - 1) + column);
        return;
      }
    }
    //Checking if white tile is below
    if (row < 3) {
      if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
        swapTiles("cell" + row + column, "cell" + (row + 1) + column);
        return;
      }
    }
  }

}