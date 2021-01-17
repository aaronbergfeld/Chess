var viewHeight = window.innerHeight;
var offset = 50;
var size = (viewHeight - offset) / 8;

var gameBoard = new Board();
var whitePawns = [];
for (let i = 0; i < 8; i++) {
  whitePawns.push(new Pawn([i, 1], "white"));
} 

function setup() {
  createCanvas(viewHeight, viewHeight);
  textAlign(CENTER);
  textSize(32);
  console.log(gameBoard.grid)
  for (let i = 0; i < whitePawns.length; i++) {
    const pawn = whitePawns[i];
    pawn.load();
  }
}


function draw() {
  background(209, 217, 230);
  gameBoard.display();
  gameBoard.showLabels();
  for (let i = 0; i < whitePawns.length; i++) {
    const pawn = whitePawns[i];
    pawn.display();
  }
}


