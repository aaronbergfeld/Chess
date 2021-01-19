var viewHeight = window.innerHeight;
var offset = 50;
var squareSize = (viewHeight - offset) / 8;

var gameBoard = new Board();
var player = new Player();

function setup() {
  createCanvas(viewHeight, viewHeight);
  textAlign(CENTER);
  textSize(32);
  gameBoard.setupPieces();
  for (let i = 0; i < gameBoard.pieces.length; i++) {
    const piece = gameBoard.pieces[i];
    piece.load();
  }
}


function draw() {
  background(209, 217, 230);

  gameBoard.display();
  gameBoard.showLabels();

  for (let i = 0; i < gameBoard.pieces.length; i++) {
    const piece = gameBoard.pieces[i];
    piece.display();
  }

  player.do();
}

function mouseClicked(){
  player.checkForPickup();
}

