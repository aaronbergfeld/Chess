var viewHeight = window.innerHeight;
var offset = 50;
var squareSize = (viewHeight - offset) / 8;

var gameBoard = new Board();
var player = new Player();

var whitePawns = [];

for (let i = 0; i < 8; i++) {
  whitePawns.push(new Pawn([i, 1], "white"));
} 

function setup() {
  createCanvas(viewHeight, viewHeight);
  textAlign(CENTER);
  textSize(32);
  for (let i = 0; i < whitePawns.length; i++) {
    const pawn = whitePawns[i];
    pawn.load();
  }
}


function draw() {
  background(209, 217, 230);

  // player.do();

  gameBoard.display();
  gameBoard.showLabels();

  for (let i = 0; i < whitePawns.length; i++) {
    const pawn = whitePawns[i];
    pawn.display();
  }
}

function mousePressed(){
  // for (let index = 0; index < whitePawns.length; index++) {
  //   const pawn = whitePawns[index];
  //   if (pawn.underMouse) {
  //       player.pickUp(pawn);
  //   }
  // }
}


