var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;
var offset = 50;
var squareSize = (viewHeight - offset) / 8;

var gameBoard = new Board();
var player = new Player();

function setup() {
  createCanvas(viewWidth, viewHeight);
  textAlign(CENTER);
  textSize(32);
  gameBoard.setupPieces();
}


function draw() {
  background(40);

  gameBoard.display();
  gameBoard.showLabels();

  for (let i = 0; i < gameBoard.pieces.length; i++) {
    const piece = gameBoard.pieces[i];
    piece.display();
  }

  player.do();
}

function mousePressed(){
  player.checkForPickup();
}

function mouseReleased(){
    if (player.isHoldingPiece) {
      player.drop(player.pieceInHand);
  }
}

