var viewHeight = window.innerHeight;
var offset = 50;
var squareSize = (viewHeight - offset) / 8;

var gameBoard = new Board();
var player = new Player();

function setup() {
  createCanvas(viewHeight, viewHeight);
  textAlign(CENTER);
  textSize(32);
  gameBoard.setupPeices();
  for (let i = 0; i < gameBoard.peices.length; i++) {
    const peice = gameBoard.peices[i];
    peice.load();
  }
}


function draw() {
  background(209, 217, 230);

  gameBoard.display();
  gameBoard.showLabels();

  for (let i = 0; i < gameBoard.peices.length; i++) {
    const peice = gameBoard.peices[i];
    peice.display();
  }

  player.do();
}

function mouseClicked(){
  player.checkForPickup();
}

